import { useMutation } from "@tanstack/react-query";
import { updateAuthenticatedUser } from "../../services/apiAccount";
import { toast } from "react-hot-toast";

export function useUpdateUser(){

    const { isPending, mutate:updateUser, error } = useMutation({
        mutationFn: ({email, password}) => updateAuthenticatedUser({email, password}),
        onSuccess: () => {
            
            toast.success("You have successfully updated your details");
        }, 
        onError: (err) => toast.error(err.message)
    });
    
    return { isPending, updateUser, error}
}