export default function StudentLogin({login, setLogin}){
    return(
        <div>
            <div className="h-screen flex justify-center items-center px-5 ">
                <div>
                    <div className="p-6 bg-slate-200 rounded">
                        <div className=" flex text-white font-semibold  w-4/5 items-center justify-center py-1 sm:py-2 mx-auto rounded ">
                            <button  onClick={()=>setLogin()} className="px-4 text-slate-600">Teacher</button>
                            <button className={login && `bg-slate-600 border-r-2 px-4 py-3 text-white rounded-full`}  >Student</button>
                        </div>
                        <div className="mt-4 ">
                            <h2 className="font-bold text-xl sm:text-2xl text-center">Sign In To Your Student Account</h2>
                        </div>
                        <div>
                            <form className="space-y-2 mt-2 ">
                                
                                <div>
                                    <label htmlFor="email" className="block font-semibold">Email:</label>
                                    <input type="email" placeholder="johndoe@work.com" className="border-2 border-black w-full py-2 rounded px-2"/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block font-semibold">Password:</label>
                                    <input type="password" placeholder="abc123*" className="border-2 border-black w-full py-2 rounded px-2"/>
                                </div>
                                
                                <div className="text-center">
                                    <button className="hover:text-white hover:bg-slate-600 hover:border-slate-600 border-2 border-black py-2 rounded mt-6 w-full">Sign In To Your Student Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}