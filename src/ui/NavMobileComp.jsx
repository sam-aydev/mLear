import { Link } from 'react-router-dom';

import menuButton from '../assets/icon-menu.svg';
import closeMenu from '../assets/icon-close-menu.svg'

export default function NavMobileComp({menu, setMenu}){
    


    return(
        <>
            <div>
                <img onClick={()=>setMenu((menu)=> !menu)} src={!menu && `${menuButton}`} alt="menu" className='mt-7  cursor-pointer md:hidden'/>

                <div className='md:flex hidden gap-6 mt-5'>
                  <Link to='/login' className='mt-2'>
                    <button>Login</button>
                  </Link>
                  <Link to='/signup'>
                    <button className='border border-black rounded-xl px-3 py-2'>Register</button>
                  </Link>
                </div>
            </div>
            {menu && 
            <div className=' md:hidden  '>
              <div className='bg-white h-full   w-2/3 right-0 fixed   '>
                <img onClick={()=>setMenu((menu)=> !menu)} src={!menu ? `${menuButton}` : `${closeMenu}`} alt="menu" className='mt-7 absolute right-14  cursor-pointer md:hidden'/>
                <div className='mt-20 px-4 py-2'> 
                  <p>Careers</p>
                </div>
                <div className='px-4 py-2'>
                  <p>About</p>
                </div>
                
                <div className='px-8 flex flex-col '>
                  <Link to='/login'>
                    <button className=' py-2 mt-6 px-20 '>Login</button>
                  </Link>
                  <Link to='/signup'>
                    <button className=' py-1 border-2 border-slate-400 rounded-xl px-20'>Register</button>
                  </Link> 
                </div>
              </div>
            </div>
            }
        </>
    )
}