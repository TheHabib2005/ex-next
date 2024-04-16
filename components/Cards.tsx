"use client"
import axios from 'axios';
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

    // const [data, setData] = useState([])
    const [error, setError] = useState(false)

    // const [loading, setLoading] = useState({})






    // const handleCart = async (product: productType) => {
    //     try {
    //         setLoading(true)

    //         const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/authentication/cart/add`, product);
    //         if (res.data.success) {
    //             setData(res.data);
    //             console.log(res.data);
    //             addToCart(res.data.data.cart)
    //         }
    //         if (res.data.error) {
    //             setError(res.data.error);
    //         }
    //         setLoading(false)
    //     } catch (error) {
    //         setLoading(false)
    //         console.log(error);

    //     }
    // };
    // const removeCart = async (product: productType) => {
    //     try {
    //         setLoading(true)
    //         const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/authentication/cart/remove`, product);
    //         if (res.data.success) {
    //             setData(res.data);

    //             addToCart(res.data.data.cart)
    //         }
    //         if (res.data.error) {
    //             setError(res.data.error);
    //         }
    //         setLoading(false)
    //     } catch (error) {
    //         setLoading(false)
    //         console.log(error);

    //     }
    // };



    // console.log(data);




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