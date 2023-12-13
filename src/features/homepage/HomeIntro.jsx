import { useState } from "react";

import AllCover from "../../ui/AllCover";
import NavCover from "../../ui/NavCover";
import NavComp from "../../ui/NavComp";
import NavMobileComp from "../../ui/NavMobileComp";
import HeroDesktopCover from "../../ui/HeroDesktopCover";
import ImageHero from "../../ui/ImageHero";
import HeroMobile from "../../ui/HeroMobile"; 
import HeroDesktop from "../../ui/HeroDesktop";

export default function HomeIntro(){
    const [menu, setMenu] = useState(false);


    return(
        <AllCover menu={menu}>
          <NavCover>
            <NavComp/>
            <NavMobileComp menu={menu} setMenu={setMenu}/>
          </NavCover>
    
          <HeroDesktopCover>
            <ImageHero/>
            <HeroDesktop/>
          </HeroDesktopCover>
          <HeroMobile/>
      </AllCover>
    )
}