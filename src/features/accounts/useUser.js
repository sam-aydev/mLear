import {  useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAccount";

export function useUser(){
    const { isPending, data:user, error } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    });


    // console.log(user)
    return { isPending, user, error}
}
