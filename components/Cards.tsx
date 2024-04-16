"use client"
import React, { useState } from 'react'
import { useCartStore } from "@/useCartStore.js"
import ProductCard from './ProductCard';
export interface productType {
    id: number;
    title: string;
    price: number;
    quantity: number
}
const Cards = () => {
    const { addToCart, cart } = useCartStore()
    const [cardData, setCardData] = useState<productType[]>([
        {
            id: 1,
            title: "iphone 15 pro max",
            price: 999,
            quantity: 1,
        },
        {
            id: 2,
            title: "samsung S23 Ultra",
            price: 785,
            quantity: 1,
        }

    ]);

    const [error, setError] = useState(false)




    if (error) {
        return (
            <div>
                some error
            </div>
        )
    }

    return (
        <div className='mt-5 p-8'>
            <h1>
                product Lists
            </h1>
            {/* username:{data?.data?.username} */}
            <div className=' mt-5'>
                {
                    cardData.map((item) => {
                        return (
                            <ProductCard setError={setError} item={item} key={item.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards