export default function Error({children, pending}){
    return(
        <p className={pending ? "mt-8 text-center px-3 text-white rounded-xl bg-green-500 py-2 font-semibold" :"mt-8 text-center px-3 text-white bg-red-400 py-2 font-semibold"}>{children}</p>
        
    )
}
