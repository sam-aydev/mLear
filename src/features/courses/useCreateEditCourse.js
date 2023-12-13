import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createCourse as createEditCourse } from "../../services/apiCourse";
import { useNavigate } from "react-router-dom";

export function useCreateEditCourse(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: createCourse, isPending} = useMutation({
        mutationFn:createEditCourse,
        onSuccess:() => {
            toast.success("You Have Successfully Created A Course");
            queryClient.invalidateQueries(["courses"]);
            navigate("/app/manage")
        },
        onError:(err) => toast.error(err.message)
        // Problem Creating This Course!. Try Again!"
    });

    const {mutate: editCourse, isPending:isEditing, isIdle} = useMutation({
        mutationFn: ({newCourse, id})=> createEditCourse(newCourse, id),
        onSuccess:() => {
            toast.success("You Have Successfully Edited This Course");
            queryClient.invalidateQueries(["courses"]);
            
        },
        onError:(err) => toast.error(err.message)
        // Problem Creating This Course!. Try Again!"
    });

    return{ createCourse, isPending, editCourse, isEditing, isIdle}
}