import { useQuery } from "@tanstack/react-query";

import { getCourseById } from "../../services/apiCourse";
import { useParams } from "react-router-dom";


export function useCourse(){
    const {id} = useParams();

    const {error, isLoading, isLoadingError, isSuccess, data: course} = useQuery({
        queryKey: ["courses"],
        queryFn: () => getCourseById(id), 
        retry:false
         
    });

    return { isLoading, isLoadingError, course, isSuccess, error}

}