import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updatePassword } from "../../services/apiAccount";

export function useUpdatePassword(){
    const navigate = useNavigate();

    const { isPending, mutate:update, error } = useMutation({
        mutationFn: ({password}) => updatePassword({password}),
        onSuccess: () => {
            toast.success("You have successfully updated your password");
            navigate("/login");
        }, 
        onError: (err) => toast.error(err.message)
    });
    
    return { isPending, update, error}
}