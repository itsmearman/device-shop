'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export default async function page() {

    type ProdProps = {
        _id: number;
        title: string;
        price: string;
        description: string;
        category: string;
        image: string;
        brand: string;
    }
    const products = await fetch("https://jsonserver.reactbd.com/phone");
    const prod = await products.json();
    return (
        <div>
            <div className='grid grid-cols-5 gap-2'>
                {prod.map((prod: ProdProps) => (
                    <Link href={`/product/`+ prod._id} className='border border-indigo-600 rounded'>
                        <div key={prod._id} >
                            <img src={prod.image} />
                            <div className='px-2 p-2'>
                            {prod.title}
                            </div>
                            </div>
                    </Link>
                ))}
            </div>
            nothing</div>
    )
}
