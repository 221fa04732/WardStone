"use client"

import { newsType } from "./newsPost";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function NewsDeleteCard({ data }: { data: newsType }){
    const [loading, setLoading] = useState(false)

    const deleteNews = async()=>{
        setLoading(true)
        try{
            const response = await axios.patch(`/api/news`,{
                id : data.id
            })
            if(response.status != 200){
                toast.warning(response.data.message)
                setTimeout(()=>{
                    window.location.href='/admin/login'
                },1000)
                return;
            }
            window.location.reload()
        }
        catch(e){
            toast.error("Something went wrong, Please try again!")
        }
        finally{
            setLoading(false)
        }
    }

    return (<div className="w-11/12 max-w-[1250px] rounded-2xl p-6 md:p-8 border border-blue-500 flex flex-col gap-6">
        <h2 className="text-lg md:text-2xl font-semibold">{data.newsTitle}</h2>
        <div className="flex flex-row  justify-between items-end gap-2 border-t border-blue-900/30 pt-4">
            <div className="flex flex-col">
                <span className="font-semibold">{data.newsAuthor}</span>
                <span className="text-sm text-white/50">{data.newsAuthorDesignation}</span>
            </div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <button className={`cursor-pointer p-2 rounded-sm hover:bg-red-500/30`}>
                        <Trash2 className="text-red-500 min-h-4 min-w-4"/>
                    </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete this news post?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone. It will permanently remove this news post and all its data.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                        {loading ? <div className="flex justify-between items-center gap-2 border px-4 py-1 rounded-md"><span>Please wait</span><Spinner /></div> : <button onClick={deleteNews} className="bg-red-600 hover:bg-red-500 cursor-pointer px-2 py-1 rounded-md">Delete Permanently</button>}
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    </div>
)}