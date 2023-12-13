import { HiBars3,  HiOutlineArrowRightOnRectangle, HiXMark } from 'react-icons/hi2';
import { useUser } from '../features/accounts/useUser';
import { useLogout } from '../features/accounts/useLogout';


export default function Header({menu, setMenu}){
    const { user} = useUser();
    const { isPending, Logout} = useLogout();

//    console.log(user)


    return(
        <div>
            <div className="bg-slate-200  flex justify-between px-4 md:px-8 py-3">
               <div>
                    <h2 className='text-lg font-bold md:text-3xl'>mLearn.</h2>
               </div>
                    
               <div className='flex space-x-4 md:space-x-8  md:px-0'>
                    <div className='flex space-x-3 mt-0 sm:mt-3'>
                        <p className='font-semibold '>{(user?.user_metadata?.full_name)?.slice(0, 8)}..</p>
                        <img src={user?.user_metadata?.image } alt="" className='w-8 h-8 rounded-full' />
                    </div>

                    <button disabled={isPending} onClick={Logout}  className='hidden md:flex space-x-2 mt-1 px-4 font-semibold cursor-pointer hover:bg-white hover:text-black py-2 bg-black text-white rounded '> 
                        <span>{isPending ? 'Logging Out' : `Logout`}</span><HiOutlineArrowRightOnRectangle className='w-7 h-7'/>  
                    </button>
                   

                    {!menu ?
                        <HiBars3 onClick={()=> setMenu(true)} className='w-7 h-7 md:hidden'/>  : 
                        <HiXMark onClick={()=> setMenu(false)}  className='w-7 h-7 md:hidden'/>
                    }
                </div>
               
            </div>
        </div>
    )
}