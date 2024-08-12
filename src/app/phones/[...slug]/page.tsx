'use client'

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProdDetail() {
    const params = useParams<{ slug: string }>();

    type ProdProps = {
        _id: number;
        title: string;
        price: string;
        description: string;
        category: string;
        image: string;
        brand: string;
    };

    const [product, setProduct] = useState<ProdProps | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://jsonserver.reactbd.com/phone/${params.slug}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, [params.slug]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='h-dvh flex'>
            <img className='w-2/5 mt-2' src={product.image} alt={product.title} />
            <div>
                <div className='text-xl font-bold flex min-h-screen items-center justify-center absolute w-3/5'>
                    {product.description}
                </div>
            </div>
        </div>
    );
}