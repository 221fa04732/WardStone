"use client"

import Image from "next/image"
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react"
import axios from "axios"
import { toast } from "sonner"

export default function AdminLogin(){

    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState<string>("")
    const [secret, setSecret] = useState<string>("")

    const adminLogin = async()=>{
        setLoading(true)
        try{
            const response = await axios.post(`/api/admin/login`, {
                password,
                secret
            })
            if(response){
                if(response.status!=200){
                    toast.warning(response.data.message)
                    return;
                }
                localStorage.setItem("token", response.data.token)
                toast.success(response.data.message)
                return;
            }
        }
        catch(e){
            toast.warning("Server Error, please retry!")
        }
        finally{
            setLoading(false)
        }
    }

    return(<div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
            <div className="w-11/12 flex flex-col justify-center items-center gap-6">
                <Image src={'/icon.png'} alt="icon" width={100} height={100} className="md:max-h-10 md:max-w-10 max-h-6 max-w-6"/>
                <label className="w-full text-gray-300">
                    <span className="block mb-1 font-medium">Admin Password<span className="text-red-600">*</span></span>
                    <input type="password" name="password" value={password} required className="w-full p-2 bg-gray-800/60 text-gray-200 border border-gray-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400" onChange={(e)=>{setPassword(e.target.value)}}/>
                </label>
                <label className="w-full text-gray-300">
                    <span className="block mb-1 font-medium">Admin Secret<span className="text-red-600">*</span></span>
                    <input type="password" name="secret" value={secret} required className="w-full p-2 bg-gray-800/60 text-gray-200 border border-gray-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400" onChange={(e)=>{setSecret(e.target.value)}}/>
                </label>
                <button onClick={adminLogin} disabled={loading} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-60 h-10 w-48 flex justify-center items-center">{loading ? <span className="flex justify-center items-center gap-2">Please wait<Spinner /></span> : "Login"}</button>
            </div>
        </div>
        <div className="hidden md:flex justify-center items-center bg-neutral-950">
            <div className="w-11/12 flex flex-col justify-center items-start gap-1">
                <div className="rubik text-lg md:text-2xl font-semibold pb-2">"The dream is alive when we stand on the edge of the unknown and dare to take the next step."</div>
                <div className="font-semibold text-white/75 text-sm">Neil Armstrong</div>
                <div className="text-xs text-white/50">Astronaut | Aerospace Engineer</div>
            </div>
        </div>
    </div>)
}