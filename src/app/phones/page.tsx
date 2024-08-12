// 'use client'
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'


// export default async function page() {

//     type ProdProps = {
//         _id: number;
//         title: string;
//         price: string;
//         description: string;
//         category: string;
//         image: string;
//         brand: string;
//     }
//     const products = await fetch("https://jsonserver.reactbd.com/phone");
//     const prod = await products.json();
//     return (
//         <div>
//             <div className='grid grid-cols-5 gap-2'>
//                 {prod.map((prod: ProdProps) => (
//                     <Link href={`/product/`+ prod._id} className='border border-indigo-600 rounded'>
//                         <div key={prod._id} >
//                             <img src={prod.image} />
//                             <div className='px-2 p-2'>
//                             {prod.title}
//                             </div>
//                             </div>
//                     </Link>
//                 ))}
//             </div>
//             nothing</div>
//     )
// }

// app/products/page.tsx
'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function ProductsPage() {
    type ProdProps = {
        _id: number;
        title: string;
        price: string;
        description: string;
        category: string;
        image: string;
        brand: string;
    }

    const [products, setProducts] = useState<ProdProps[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://jsonserver.reactbd.com/phone");
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <div className='grid grid-cols-5 gap-2'>
                {products.map((prod: ProdProps) => (
                    <Link href={`/phones/${prod._id}`} key={prod._id} className='border border-indigo-600 rounded'>
                        <div>
                            <img src={prod.image} alt={prod.title} />
                            <div className='px-2 p-2'>
                                {prod.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
