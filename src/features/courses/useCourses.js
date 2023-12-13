import { useQuery } from "@tanstack/react-query";

import { getCourses } from "../../services/apiCourse";
import { useSearchParams } from "react-router-dom";
import { useUser } from "../accounts/useUser";

export function useCourses(){
    const [searchParams, setSearchParams] = useSearchParams();
    const {user} = useUser();
    const profileId = user?.id
    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

    const {
        error, 
        isLoading, 
        isLoadingError, 
        data:{count, data: courses} = {}
    } = useQuery({
        queryKey: ["courses", page],
        queryFn: () => getCourses(page, profileId), 
        // refetchInterval: 1000
    });

    return { isLoading, isLoadingError, courses, count, error}

}