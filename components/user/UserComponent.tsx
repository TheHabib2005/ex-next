"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function UserComponent() {
    const router = useRouter()
    const [data, setData] = useState<any>()
    const logout = async () => {
        try {
            await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/authentication/logout1`)
            toast.success('Logout successful')
            router.push('/signIn')
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/authentication/userDetails')
        console.log(res.data);
        setData(res.data.data)
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            {/* <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
            </Link>}</h2> */}
            <hr />
            <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Logout</button>

            {/* <button
                onClick={getUserDetails}
                className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >GetUser Details</button> */}

            <p>username : {data?.username}</p>
            <p>email : {data?.verifyToken}</p>


        </div>
    )
}