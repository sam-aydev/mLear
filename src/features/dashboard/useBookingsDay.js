import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getCoursesAfterDays } from "../../services/apiCourse";
import { subDays } from "date-fns";
// import { useCourses } from "../courses/useCourses";
import { useUser } from "../accounts/useUser";


export function useBookingsDay(){
    const [searchParams, setSearchParams] = useSearchParams();
    const { user } = useUser();

    const profileId = user?.id

    const numDays = !searchParams.get("days") ? 7 : Number(searchParams.get("days"));
    // console.log(numDays);

    const queryDate = subDays(new Date(), numDays).toISOString();

    const { isLoading, data : courses, error } = useQuery({
        queryKey: ["courses", `last-${numDays}`],
        queryFn: () => getCoursesAfterDays(queryDate, profileId),
    });

    console.log(courses)
    return { isLoading, courses, error }
}