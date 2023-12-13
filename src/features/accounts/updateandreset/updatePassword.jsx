import { useState } from "react"

import Error from "../../../ui/Error";
import { useUpdatePassword } from "../useUpdatePassword";

export default function UpdatePassword(){
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { isPending, update, error } = useUpdatePassword();

    function handleSubmit(e){
        e.preventDefault()
        if(password !== confirmPassword) return;   
        update({password}, {
            onSettled: () =>{
                setPassword("")
                setConfirmPassword("")
            }
        })

       
    
    }

    return(
        <div>
           <div className="h-screen bg-slate-50 flex justify-center items-center px-5 ">
                <div>
                    <div className="p-6 bg-slate-200 rounded-xl">
                        <div className=" flex text-white font-semibold  w-4/5 items-center justify-center py-1 sm:py-2 mx-auto rounded ">
                            <button className="bg-slate-600 border-r-2 px-4 py-3 text-white rounded-full">Teacher</button>
                        </div>
                        <div className="mt-4 ">
                            <h2 className="font-bold text-xl sm:text-2xl text-center">Confirm & Reset Password</h2>
                        </div>
                        <div>
                            {error && <Error>There was error loading this data. Try Again!</Error>}
                            <form onSubmit={handleSubmit} className="space-y-2 mt-6 ">
                                <div>
                                    <label className="block font-semibold">Password:</label>
                                    <input disabled={isPending} id="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="johndoe@work.com" className="border-2 border-black w-full py-2 rounded px-2"/>
                                </div>

                                <div>
                                    <label className="block font-semibold"> Confirm Password:</label>
                                    <input disabled={isPending} id="confirm_password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="johndoe@work.com" className="border-2 border-black w-full py-2 rounded px-2"/>
                                </div>


                                <div className="text-center">
                                    <button disabled={isPending}  className="hover:text-white hover:bg-slate-600 hover:border-slate-600 border-2 border-black py-2 rounded mt-6  w-full">{isPending ? "Reseting The Password" : "Reset Your Password"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}