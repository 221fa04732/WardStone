import { RotateCw } from 'lucide-react';

export default function Error({data, height, fn} : {data : string, height : string, fn : ()=> void}){
    return(<div className={`${height} w-full flex justify-center items-center`}>
        <div className="w-11/12 flex flex-col justify-center items-center gap-2">
            <div className="text-center">{data}</div>
            <div className="text-center rubik text-lg md:text-2xl">Oops! Something went wrong</div>
            <button onClick={fn} className='flex justify-center items-center gap-2 bg-red-500 px-2 py-1 rounded-sm cursor-pointer'>Try again<RotateCw className='max-h-4 max-w-4' /></button>
        </div>
    </div>)
}