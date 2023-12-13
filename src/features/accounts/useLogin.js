import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../services/apiAccount";

export function useLogin(){
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const { isPending, mutate:Login, error } = useMutation({
        mutationFn: ({email, password}) => LoginApi({email, password}),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user)
            console.log(user)
            toast.success("You have Successfully Login");
            navigate("/app", {replace: true})
        }, 
        onError: (err) => toast.error(err.message)
    });
    
    return { isPending, Login, error}
}
