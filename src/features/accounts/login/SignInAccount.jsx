import { useState } from "react";

import TeacherLogin from "./TeacherLogin";
import NavCover from "../../../ui/NavCover";
import NavComp from "../../../ui/NavComp";
import NavMobileComp from "../../../ui/NavMobileComp";

export default function SignInAccount(){
    const [menu, setMenu] = useState(false);


    return(
        <div>
            <NavCover>
                <NavComp />
                <NavMobileComp menu={menu} setMenu={setMenu}/>
            </NavCover>

            <TeacherLogin />
             
        </div>
    )
}