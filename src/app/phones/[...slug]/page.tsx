'use client'

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProdDetail() {
    const params = useParams<{ slug: string }>()

    type ProdProps = {
        _id: number;
        title: string;
        price: string;
        description: string;
        category: string;
        image: string;
        brand: string;
    }

    const [product, setProduct] = useState<ProdProps >([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://jsonserver.reactbd.com/phone/${params.slug}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, []);
    // console.log(product.title);
    return (<div>
        <img src={product.image} alt={product.title} />
        <div>
            <div className='px-2 p-2'>
                {product.description}
            </div>
        </div>

    </div>
    )
}