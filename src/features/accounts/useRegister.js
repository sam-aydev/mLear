import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignUp as SignUpApi} from "../../services/apiAccount";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegister(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { isPending, mutate:Signup } = useMutation({
        mutationFn: ({fullName, email, password, image}) => SignUpApi({fullName, email, password, image}),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user)
            toast.success("You have Successfully register");
            navigate("/app")
        }, 
        onError: (err) => toast.error(err.message)
    });
    
    return { isPending, Signup}
}