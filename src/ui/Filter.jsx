import { useSearchParams } from "react-router-dom";

export default function Filter({field, options, initialValue}){
    const [searchParams, setSearchParams] = useSearchParams();

    const value = searchParams.get(field) || initialValue;

    function handleClick(value){
        searchParams.set(field, value)
        setSearchParams(searchParams);
        // console.log(searchParams)
    }


    return(
        <div className="space-x-3 md:text-sm px-2  lg:text-[16px] space-y-1">
            {options.map((option)=>            
                <button key={option.label} onClick={()=> handleClick(option.value)}  className={value === option.value ? "bg-slate-600 text-white  px-2 py-1 rounded": "hover:bg-slate-600 hover:text-white bg-white px-2 py-1 rounded text-black"}>{option.label}</button>
            )}

            {/* <button onClick={()=> handleClick("all")} className={value === "all" ? "bg-slate-600 text-white  px-2 py-1 rounded": "hover:bg-slate-600 hover:text-white bg-white px-2 py-1 rounded text-black"}>All</button>
            <button onClick={()=> handleClick("<35")}  className={value === "<35" ? "bg-slate-600 text-white  px-2 py-1 rounded": "hover:bg-slate-600 hover:text-white bg-white px-2 py-1 rounded text-black"}>Less Than $35</button>
            <button onClick={()=> handleClick(">35")}  className={value === ">35" ? "bg-slate-600 text-white  px-2 py-1 rounded": "hover:bg-slate-600 hover:text-white bg-white px-2 py-1 rounded text-black"}>Greater than $35</button> */}
        </div>
    )
}