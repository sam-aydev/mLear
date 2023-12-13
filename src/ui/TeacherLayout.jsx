import {Outlet} from "react-router-dom"
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function TeacherLayout(){
    const [menu, setMenu] = useState(false);

    return(
        <div>
            <Header menu={menu} setMenu={setMenu}/>
            <Outlet />
            <Sidebar menu={menu} setMenu={setMenu}/>
            
        </div>
    )
}