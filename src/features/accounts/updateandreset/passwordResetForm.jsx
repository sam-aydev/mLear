import { useState } from "react"

import Error from "../../../ui/Error";
import { useResetPassword } from "../useResetPassword";

export default function PasswordResetForm(){
    const [email, setEmail] = useState("samueladetunji000@gmail.com");
    const { isPending, reset, error } = useResetPassword();

    function handleSubmit(e){
        e.preventDefault()
        if(!email) return;   
        reset({email}, {
            onSettled: () => setEmail("")
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
                            <h2 className="font-bold text-xl sm:text-2xl text-center">Send Email To Reset Password</h2>
                        </div>
                        <div>
                            {error && <Error>There was error loading this data. Try Again!</Error>}
                            <form onSubmit={handleSubmit} className="space-y-2 mt-6 ">
                                <div>
                                    <label className="block font-semibold">Email:</label>
                                    <input disabled={isPending} id="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="johndoe@work.com" className="border-2 border-black w-full py-2 rounded px-2"/>
                                </div>

                                <div className="text-center">
                                    <button disabled={isPending}  className="hover:text-white hover:bg-slate-600 hover:border-slate-600 border-2 border-black py-2 rounded mt-6  w-full">{isPending ? "Sending Email" : "Send Email To Reset"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}