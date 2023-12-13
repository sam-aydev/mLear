import {  useQuery } from "@tanstack/react-query";
import { getSession } from "../../services/apiAccount";

export function useSession(){
    const { isPending, data:session ={}, error } = useQuery({
        queryKey: ["user"],
        queryFn: getSession,
    });


    // console.log(session)
    return { isPending, session, error}
}
