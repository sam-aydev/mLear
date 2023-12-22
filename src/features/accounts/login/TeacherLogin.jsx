import { useState } from "react"
import { Link } from "react-router-dom";
import { useLogin } from "../useLogin";

import Error from "../../../ui/Error";

export default function TeacherLogin(){
    const [email, setEmail] = useState("");
    const [noemail, setNoEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [nopassword, setNoPassword] = useState(false);
    const { isPending, Login, error } = useLogin()

    function handleSubmit(e){
        e.preventDefault();
        if(!email) {
            setNoEmail(true);
            return;
        };
   
        if(!password){
            setNoPassword(true);
            return;
        };

        Login({email, password}, {
            onSettled: () => {
            setEmail("");
            setPassword("");
        }
        });

       
    
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
                            <h2 className="font-bold text-xl sm:text-2xl text-center">Sign In To Your Teacher Account</h2>
                        </div>
                        <div>
                            {error && <Error>There was error loading this data. Try Again!</Error>}
                            <form onSubmit={handleSubmit} className="space-y-2 mt-6 ">
                                <div>
                                    <label className="block font-semibold">Email:</label>
                                    <input disabled={isPending} id="email" value={email} onChange={(e)=>{
                                        setNoEmail(false)
                                        setEmail(e.target.value)
                                        }} type="email" placeholder="johndoe@work.com" className="border-2 border-black w-full py-2 rounded px-2"/>
                                    {noemail && <p className="text-red-600 font-semibold">Please Fill With Correct Email!.</p>}
                                </div>

                                <div>
                                    <label  className="block font-semibold">Password:</label>
                                    <input disabled={isPending} value={password} onChange={(e)=> {
                                        setPassword(e.target.value)
                                        setNoPassword(false)
                                        }} type="password" placeholder="abc123*" className="border-2 border-black w-full py-2 rounded px-2"/>
                                    {nopassword && <p className="text-red-600 font-semibold">Please Fill With Correct Password!.</p>}
                                </div>
                                
                                <div className="text-center">
                                    <button disabled={isPending}   className="hover:text-white hover:bg-slate-600 hover:border-slate-600 border-2 border-black py-2 rounded mt-6  w-full">{isPending ? "Signing You In" : "Sign In To Your Teacher Account"}</button>
                                </div>
                            </form>
                            <Link to="/resetPassword" className="text-black font-semibold">Forgotten Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}