import { useState } from "react";

import CreateTeacherAccount from "./CreateTeacherAccount";
import NavComp from "../../../ui/NavComp";
import NavCover from "../../../ui/NavCover";
import NavMobileComp from "../../../ui/NavMobileComp";

export default function CreateAccount(){
    const [menu, setMenu] = useState(false);

    return(
        <div>
            <NavCover>
                <NavComp />
                <NavMobileComp menu={menu} setMenu={setMenu}/>
            </NavCover>
            <CreateTeacherAccount/>
             
        </div>
    )
}