import heroDesktop from '../assets/image-hero-desktop.png';
import heroMobile from '../assets/image-hero-mobile.png';


export default function ImageHero(){
    return(
        <div className='px-8 md:px-1 md:w-2/5  '>
          <img src={heroMobile} alt="mobilehero" className='mt-8 md:hidden'/>
          <img src={heroDesktop} alt="mobilehero" className='mt-12 hidden md:flex md:h-2/3'/>
        </div>
    )
} 