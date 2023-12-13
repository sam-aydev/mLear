import { useMutation } from "@tanstack/react-query";
import { resetPassword} from "../../services/apiAccount";
import { toast } from "react-hot-toast";

export function useResetPassword(){

    const { isPending, mutate:reset, error } = useMutation({
        mutationFn: ({email}) => resetPassword({email}),
        onSuccess: () => {
            toast.success("Email Is Successfully Sent");
        }, 
        onError: (err) => toast.error(err.message)
    });
    
    return { isPending, reset, error}
}