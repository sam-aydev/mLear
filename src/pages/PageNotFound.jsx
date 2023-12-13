import { Link } from "react-router-dom";

export default function PageNotFound(){
    
    return(
        <div>
            <div className="flex justify-center items-center h-screen  px-16 bg-slate-200 text-center">
                <div className="text-xl bg-white py-8 rounded-xl px-9 text-center">
                    This Is Not The Right Path, Go Back Home By Clicking the Button Below

                    <div>
                        <Link to="/">
                            <button className="mt-10 rounded px-3 py-2 hover:text-black hover:bg-slate-100 bg-black text-white">Go Back Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}