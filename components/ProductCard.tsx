import { useCartStore } from "@/useCartStore";
import React, { FC, useState } from "react";
import { productType } from "./Cards";
import axios from "axios";
import toast from "react-hot-toast";
interface Props {
    item: productType;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProductCard: FC<Props> = ({ item, setError }) => {
    const { addToCart, cart } = useCartStore();

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const handleCart = async (product: productType) => {
        try {
            setLoading(true);

            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/authentication/cart/add`,
                product
            );
            if (res.data.success) {
                setData(res.data);
                console.log(res.data);
                addToCart(res.data.data.cart);
                toast.success("Added to cart");
            }
            if (res.data.error) {
                setError(true);
                toast.error("error");
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(true);

            toast.error("error");
        }
    };
    const removeCart = async (product: productType) => {
        try {
            setLoading(true);
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/authentication/cart/remove`,
                product
            );
            if (res.data.success) {
                setData(res.data);

                addToCart(res.data.data.cart);
                toast.success("Remove From cart");
            }
            if (res.data.error) {
                setError(true);
                toast.error("error");
            }
            setLoading(false);
        } catch (error) {
            toast.error("error");

            setLoading(false);
            console.log(error);
            setError(true);
        }
    };

    console.log(data);

    const my = (id: number) => {
        if (cart?.length > 0) {
            const isProductInCart = cart.find((item: any) => item.id === id);
            return isProductInCart;
        }
    };

    return (
        <div className="mb-5">
            <h1>{item.title}</h1>
            <h1>$ {item.price}</h1>
            {my(item.id) ? (
                <button
                    className="bg-blue-500 text-white p-2  disabled:bg-gray-300 rounded-md  mt-3"
                    disabled={loading}
                    onClick={() => removeCart(item)}
                >
                    {loading ? "Loading" : "remove to Cart"}
                </button>
            ) : (
                <button
                    className="bg-blue-500 text-white p-2  disabled:bg-gray-300 rounded-md  mt-3"
                    disabled={loading}
                    onClick={() => handleCart(item)}
                >
                    {loading ? "Loading" : "Add to Cart"}
                </button>
            )}
        </div>
    );
};

export default ProductCard;
