export default function NavCover({children}){
    return(
        <div>
            <nav className='bg-slate-50 flex justify-between px-12'>
                {children}   
            </nav>
        </div>
    )
}