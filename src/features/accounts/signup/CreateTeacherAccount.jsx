import { useForm } from "react-hook-form";
import { useRegister } from "../useRegister";

import Error from "../../../ui/Error";


export default function CreateTeacherAccount(){
    const {register, handleSubmit, reset, formState} = useForm();
    const { isPending, Signup } = useRegister();

    const { errors } = formState;

    
    function onSubmit(data){
        console.log(data)
       
        Signup({...data, image: data.image[0]},
            {
                onSettled: ()=> reset()
            }
        )
    }

    return(
        <div>
            <div className="h-fit flex justify-center items-center px-5 bg-slate-50 pb-20">
                <div>
                    <div className="p-6 bg-slate-200 rounded-xl mt-20 ">
                        <div className=" flex text-white font-semibold  w-4/5 items-center justify-center py-1 sm:py-2 mx-auto rounded ">
                            <button className="bg-slate-600 border-r-2 px-4 py-3 text-white rounded-full">Teacher</button>
                        </div>
                        <div className="mt-4 ">
                            <h2 className="font-bold text-xl sm:text-2xl text-center">Sign Up For A Teacher Account</h2>
                        </div>
                        <div>
                            <form className="space-y-2 mt-2" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="block font-semibold">Full Name:</label>
                                    <input disabled={isPending}  type="text" placeholder="Adet Sam" {...register("fullName", {required:"This field is required!"})} className="border-2 border-black w-full py-2 rounded px-2"/>
                                    {errors?.fullName?.message &&  <Error>{errors.fullName.message}</Error>}
                                </div>

                                <div>
                                    <label  className="block font-semibold">Email:</label>
                                    <input disabled={isPending} type="email" placeholder="johndoe@work.com" className="border-2 border-black w-full py-2 rounded px-2"  {...register("email", {required:"This field is required!"})}/>
                                    {errors?.email?.message &&  <Error>{errors.email.message}</Error>}
                                </div>

                                <div>
                                    <label className="block font-semibold">Password:</label>
                                    <input disabled={isPending} {...register("password", {required:"This field is required!"})} type="password" placeholder="abc123*" className="border-2 border-black w-full py-2 rounded px-2"/>
                                    {/* {errors?.password?.message &&  <Error>{errors.password.message}</Error>} */}
                                </div>

                                <div className="mt-2">
                                    <label className="block text-lg font-semibold">Upload Profile Image:</label>
                                    <input disabled={isPending} {...register("image", {required:"This field is required!"})} type="file"  accept="image/*" className="w-full bg-white  border-2 border-black rounded px-2 py-2"/>
                                    {errors?.image?.message &&  <Error>{errors.image.message}</Error>}
                                </div>
                                
                                <div className="text-center">
                                    
                                        <button disabled={isPending} className="hover:text-white hover:bg-black hover:border-slate-600 border-2 border-black py-2 rounded mt-6  w-full">Sign Up For A Teacher Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}