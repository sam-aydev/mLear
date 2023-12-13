import { useState } from "react";

import NavCover from "../../../ui/NavCover";
import NavComp from "../../../ui/NavComp";
import NavMobileComp from "../../../ui/NavMobileComp";
import PasswordResetForm from "./passwordResetForm";

export default function ResetPassword(){
    const [menu, setMenu] = useState(false);


    return(
        <div>
            <NavCover>
                <NavComp />
                <NavMobileComp menu={menu} setMenu={setMenu}/>
            </NavCover>

            <PasswordResetForm/>
             
        </div>
    )
}