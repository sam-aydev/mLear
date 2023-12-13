import { useUser } from "../features/accounts/useUser";
import { useBookingsDay } from "../features/dashboard/useBookingsDay";

import Error from "./Error";
import Spinner from "./Spinner";
import TutorBox from "./TutorBox";


export default function TutorDashboard(){
    const { courses, error, isLoading } = useBookingsDay();
    const { user, isPending } = useUser()

    const asumedPrice = Array.isArray(courses) ? courses?.reduce((acc, cur)=> acc + cur.price, 0) : null
 
    console.log(courses)
    


    return(
        <div>
            <div className="md:w-[64%] lg:w-[73%] xl:w-[78%] md:absolute md:right-0 min-h-screen   w-full flex justify-center  sm:px-4 py-10  bg-slate-300">
               <div>
                    {error || isLoading && <Spinner/>}
                    {!courses ? 
                        <Error>There is no course! Go and Create A Course</Error>
                        : 
                        <TutorBox course= {courses} user={user} isPending={isPending}  asumedPrice={asumedPrice} />
                    }   
               </div>
            </div>

        </div>
    )
}