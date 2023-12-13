import { useEffect } from "react";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useSession } from "../features/accounts/useSession";
import FullScreen from "./FullScreen";

export default function RouteProtect({children}){
    const {isPending, session}= useSession();
    const navigate = useNavigate();

    // const isAuthenticated = user?.role === "authenticated"; 

    useEffect(function (){
        if(!session) navigate("/login")
    }, [session, navigate])

    if(isPending) return <FullScreen><Spinner/></FullScreen> 
    

    if(session) return children
}