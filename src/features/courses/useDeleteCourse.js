import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse as deleteCourseApi} from "../../services/apiCourse";
import { toast } from "react-hot-toast";

export function useDeleteCourse(){
        const queryClient = useQueryClient();

        const { mutate, isPending } = useMutation({
            mutationFn: deleteCourseApi,
            onSuccess: () => {
                toast.success("This course is successfully deleted")
                queryClient.invalidateQueries(["courses"])
            }, 
            onError: (err)=> toast.error(err),          
        });

    return { mutate, isPending }
}