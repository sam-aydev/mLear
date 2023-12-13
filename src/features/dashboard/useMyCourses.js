import { useQuery } from "@tanstack/react-query";
import { getMyCourses } from "../../services/apiCourse";
import { useUser } from "../accounts/useUser";


export function useMyCourses(){
    const { user } = useUser();

    const profileId = user?.id;
    
    const {
        error, 
        isLoading, 
        isLoadingError, 
        data:courses
    } = useQuery({
        queryKey: ["courses"],
        queryFn: () => getMyCourses(profileId)
    });

    return { isLoading, isLoadingError, courses, error}

}