import { useState } from "react";
import { useMyCourses } from "../../dashboard/useMyCourses";
import { useUser } from "../useUser"
import { useUpdateUser } from "../useUpdateUser";

export default function TeacherAccount(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {user} = useUser();
    const {courses} = useMyCourses();
    const {updateUser, isPending} = useUpdateUser();

    
    function handleSubmit(e){
        e.preventDefault()
        if(!email || !password) return;

        updateUser({email, password})
        
    }


    return(
        <div className="md:w-[64%] lg:w-[73%] xl:w-[78%] md:absolute md:right-0 min-h-screen w-full flex justify-center px-1 bg-slate-300">
            <div className="mt-10 px-6 ">
                <div className="text-center flex flex-col justify-center bg-white py-8 rounded-xl px-2 sm:px-6 md:px-8 xl:px-20">
                    {user && 
                        <>
                            <img src={user?.user_metadata?.image} alt="logo" className=" rounded-full w-24 h-24 flex mx-auto " />
                            <h2 className="text-2xl font-bold text-blue-900">{user?.user_metadata?.full_name}</h2>
                        </>
                    }
                    <p className="text-black font-semibold">Course Instructor</p>
                    <p className="mt-3 text-slate-400">An Amazing Instructor at mLearn, with the aim of impacting into students life.</p>

                    <div className="flex justify-center mt-7 ">
                        <div className="border-r-2 w-[40%] border-r-black">
                            <p>{courses?.length}</p>
                            <p>Courses</p>
                        </div>

                        <div className="w-[45%]">
                            <p>${courses?.reduce((acc, sum)=> acc + sum.price, 0)}</p>
                            <p>Amount Assumed</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="mt-10 ">
                            <h2 className="font-bold text-xl text-left md:text-2xl">Update Your Details</h2>

                            <form onSubmit={handleSubmit}>
                                <p className="px-2 bg-slate-400 text-white py-2 mt-4">If you change your email, make sure to check both email for messages.</p>
                                <div className="space-x-4 mt-6">
                                    <label className="font-semibold">Email:</label>
                                    <input disabled={isPending} type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="px-3 py-2 border-2 border-black rounded-xl"/>
                                </div>

                                <div className="space-x-4 mt-6">
                                    <label className="font-semibold">Password:</label>
                                    <input disabled={isPending} type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="px-3 py-2 border-2 border-black rounded-xl"/>
                                </div>

                                <div className="space-x-4 mt-6">
                                    <button disabled={isPending} className="px-3 py-2 bg-black text-white rounded w-[80%] hover:text-black hover:bg-slate-300">Update Both Password And Email</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* <div>
                        <div className="mt-10">
                            <p className="text-xl md:text-2xl font-bold text-left">Do you want to delete this account?</p>
                            <div className="mt-8">
                                <p className="bg-slate-400 py-2 px-2 text-white">Note: clicking the button below delete you once</p>
                                <button disabled={isDeleting} onClick={()=> deleteUser(user?.id)} className="px-3 py-2 hover:bg-slate-200 hover:text-red-900 mt-4 font-bold rounded w-[80%] text-white bg-red-800">{isDeleting ? "Deleting" : "Delete Account"}</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}