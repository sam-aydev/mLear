import {useForm} from "react-hook-form";

import { useCreateEditCourse } from "./useCreateEditCourse";

import FormCourse from "../../ui/FormCourse";
import { useUser } from "../accounts/useUser";


export default function TeacherCourseForm(){
    const { createCourse, isPending } = useCreateEditCourse();
    const { user } = useUser()
    


    const { register, handleSubmit, reset, formState } = useForm();

    const { errors } = formState;

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    // console.log(randomColor)
    
    function onSubmit(data){
        const datas = {...data, Label: randomColor, profile_id: user?.id, video: data.video[0]}
        console.log(datas)
        createCourse({Label: randomColor,profile_id: user.id, ...datas});        
    }

    return(
        <div>
            <div className="md:w-[64%] lg:w-[73%] xl:w-[78%] md:absolute md:right-0  w-full flex justify-center px-9 py-10  bg-slate-300">
                <div>   
                                
                    <div className="mt-4 flex justify-center bg-slate-50  p-6  rounded border-2  border-slate-100 ">
                        <FormCourse 
                        onSubmit={onSubmit}
                        title="Create A Course"
                        butName="Create Course"
                        isPending={isPending}
                        register={register}
                        errors={errors}
                        handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}