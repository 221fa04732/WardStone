import { Spinner } from "../ui/spinner"

export default function Loading({data, height} : {data : string, height : string}){
    return(<div className={`${height} w-full flex justify-center items-center`}>
        <div className="w-11/12 flex flex-col justify-center items-center gap-2">
            <div className="text-center">{data}</div>
            <Spinner className="size-6 text-blue-500" />
        </div>
    </div>)
}