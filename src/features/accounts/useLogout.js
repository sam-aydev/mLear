import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/apiAccount";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { isPending, mutate:Logout } = useMutation({
        mutationFn:logout,
        onSuccess: () => {
            queryClient.removeQueries()
            toast.success("You are logged out");
            navigate("/login", {replace: true})
        }, 
        onError: (err) => toast.error(err.message)
    });
    
    return { isPending, Logout}
}