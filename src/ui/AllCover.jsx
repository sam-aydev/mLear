export default function AllCover({children, menu}){
    return(
        <div className={menu ? 'bg-slate-50 h-full md:h-full' : 'bg-slate-50 md:h-screen' }>
            {children}
        </div>
    )
} 