export default function Error({data, height} : {data : string, height : string}){
    return(<div className={`${height} w-full flex justify-center items-center`}>
        <div className="w-11/12 flex flex-col justify-center items-center gap-2">
        <div className="text-center">{data}</div>
            <div className="text-center rubik text-lg md:text-2xl">Oops! Something went wrong</div>
        </div>
    </div>)
}