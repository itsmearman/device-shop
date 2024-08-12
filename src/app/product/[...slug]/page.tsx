'use client'

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProdDetail() {
    const params = useParams<{ tag: string; item: string; slug: string }>()

    // console.log(params.slug[0]);

    type ProdProps = {
        _id: number;
        title: string;
        price: string;
        description: string;
        category: string;
        image: string;
        brand: string;
    }

    const [product, setProducts] = useState<ProdProps>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`https://jsonserver.reactbd.com/phone/${params.slug}`);
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);
    // console.log(product.title);
    return (<div>
            <div>
                <img src={product.image} alt={product.title} />
                <div className='px-2 p-2'>
                    {product.description}
                </div>
            </div>
        
    </div>
    )
}