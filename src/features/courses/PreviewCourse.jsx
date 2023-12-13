import { useCourse } from "./useCourse";

import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import Error from "../../ui/Error";


export default function PreviewCourse(){
    const { course , isLoading, isLoadingError, error, isSuccess} = useCourse();
    const navigate = useNavigate();
        
   
    
  
   

    return(
        <div>
            <div className="md:w-[64%] lg:w-[73%] xl:w-[78%] md:absolute md:right-0 h-fit md:h-[125%] w-full flex justify-center px-1 bg-slate-300">
                <div>
                    <div className="px-6" > 

                        {!isLoading && !isLoadingError && course.video && <Error pending>You are now able to preview your course 🎉</Error>}   
                        {error  && <Error>There was error loading preview! 😢</Error>}
                        {/* {!course.video && <Error>There was an error fetching data</Error>} */}
                    </div>

                    <div className="flex justify-center px-4">
                        {
                        !isLoading && !isLoadingError && course.video &&
                        <div className="mt-8 flex justify-center ">
                            <h2 className="text-2xl text-center font-bold">PREVIEW OF {(course?.title)?.toUpperCase()}</h2>
                        </div>
                       }  
                        
                        {isLoading || !course.video && <Spinner/>}
                    </div>

                    {!isLoading && !isLoadingError && course.video &&
                    <div className="w-1/2 lg:w-[37%] xl:w-1/3 mt-5  md:mt-5 bg-white h-fit rounded-xl mx-auto">
                        <div className="p-2 "> 
                            <div className="">
                                <video controls className="rounded-xl" src={course.video}> </video>
                            </div>
                            <div  className="mt-2 px-4 space-y-3">
                                <h2 className="text-center font-extrabold text-md  md:text-xl  lg:text-2xl">{course?.title}</h2>
                                <p>{course?.description}</p>
                            </div>
                            <div className="mt-4 px-4">
                                <button disabled className=" hover:text-white hover:bg-black px-4 py-1 w-full text-center bg-slate-400 rounded">Enroll for ${course?.price}</button>
                            </div>
                        </div>
                    </div>}
                    {!isLoading && !isLoadingError && course.video && <div  className="flex justify-end">
                        <button className="px-3 py-2 bg-black text-white rounded mt-2 hover:text-black hover:bg-white"  onClick={()=>navigate(-1)}>Back</button>
                    </div>  }
                </div>
            </div>
        </div>
    )
}