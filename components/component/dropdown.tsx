"use client"

import { TextAlignJustify } from 'lucide-react';
import { useState } from 'react';
import { navigationURLType } from './navbar';
import Link from 'next/link';

export default function Dropdown({navigationURL} : {navigationURL : navigationURLType[]}){
    const [visible, setVisible] = useState<boolean>(false)

    return(
    <div className="relative">
        <button onClick={() => setVisible(!visible)}>
            <TextAlignJustify />
        </button>

        <div className={`${visible ? "block" : "hidden"} fixed top-10 left-0 w-full z-50 bg-[#010115]`}>
            <div className="flex flex-col items-center gap-4 py-4 text-white">
            {navigationURL.map((item: navigationURLType) => (
                <Link className="hover:text-blue-500 rubik" key={item.url} href={item.url}>{item.name}</Link>
            ))}
            </div>
        </div>
    </div>)
}