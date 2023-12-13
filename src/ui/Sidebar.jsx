import { NavLink, useLocation } from 'react-router-dom';
import { 
    HiOutlineBuildingLibrary, 
    HiOutlineFolder,
    HiMiniUserCircle, 
    HiPlus,
    HiXMark,
    HiMiniUserMinus,
 } from 'react-icons/hi2';
import { useLogout } from '../features/accounts/useLogout';

export default function Sidebar({menu, setMenu}){
    const {pathname} = useLocation();
    const { isPending, Logout} = useLogout();



    
    return(
        <div>      
            <div className="md:white md:w-[36%] lg:w-[27%] xl:w-1/4 md:relative md:h-full  md:justify-normal border-slate-600 md:border-r-2 flex fixed   bg-slate-200 justify-evenly md:left-0">
            
                {menu && 
                <div className='md:hidden fixed w-4/5 sm:w-1/2 h-full bg-slate-200 top-0 right-0  '>
                    <div onClick={()=>setMenu((menu)=> !menu)} className='md:hidden flex  mt-4 absolute right-8'>
                        <HiXMark className='w-7 h-7 md:hidden'/>
                    </div>

                    <div className='mt-20 w-full px-3 sm:px-10 '>
                        <div className={pathname === '/app' ? 'font-bold py-2 rounded-full flex justify-center mt-8 bg-slate-600 border-2   border-white text-white': 'mt-8  hover:border-2 hover:border-white border-2 border-slate-600  hover:bg-slate-600 hover:text-white flex justify-center font-bold bg-white  rounded-full py-2'}>
                            <p className=' text-center flex gap-1 md:gap-4'><span><HiOutlineBuildingLibrary className='w-6 h-6 '/></span> 
                                <NavLink to='/app'>
                                    Home
                                </NavLink>
                            </p>
                        </div>

                        <div className={pathname === '/app/create' ? 'font-bold py-2 rounded-full flex justify-center mt-8 bg-slate-600 border-2   border-white text-white': 'mt-8  hover:border-2 hover:border-white border-2 border-slate-600  hover:bg-slate-600 hover:text-white flex justify-center font-bold bg-white  rounded-full py-2'}>
                            <p className='text-center cursor-pointer flex gap-1 md:gap-4'><span><HiPlus className='w-6 h-6 '/></span> 
                                <NavLink to='/app/create'>
                                    Create Course
                                </NavLink>
                            </p>
                        </div>
                        
                        <div className={pathname === '/app/manage' ? 'font-bold py-2 rounded-full flex justify-center mt-8 bg-slate-600 border-2   border-white text-white': 'mt-8  hover:border-2 hover:border-white border-2 border-slate-600  hover:bg-slate-600 hover:text-white flex justify-center font-bold bg-white  rounded-full py-2'}>
                            <p className='text-center flex gap-1 md:gap-4'><span><HiOutlineFolder className='w-6 h-6 '/></span> 
                                <NavLink to='/app/manage'>
                                    Manage Course
                                </NavLink>
                            </p>
                        </div>

                        <div className={pathname === '/app/account' ? 'font-bold py-2 rounded-full flex justify-center mt-8 bg-slate-600 border-2   border-white text-white': 'mt-8  hover:border-2 hover:border-white border-2 border-slate-600  hover:bg-slate-600 hover:text-white flex justify-center font-bold bg-white  rounded-full py-2'}>
                            <p className='text-center flex gap-1 md:gap-4'><span><HiMiniUserCircle className='w-6 h-6 '/></span> 
                                <NavLink to='/app/account'>
                                    Account
                                </NavLink>
                            </p>
                        </div>    

                        <div className={pathname === '/app/logout' ? 'bottom-0 w-4/5 left-10 px-8 font-bold py-2 rounded-full  flex justify-center mt-8 bg-slate-600 border-2   border-white text-white':  '  bottom-0 absolute w-4/5 left-10 hover:border-2 hover:border-white border-2 border-slate-600  hover:bg-slate-600 hover:text-white flex justify-center font-bold bg-white  rounded-full py-2'}>
                            <p onClick={()=>Logout()} className='text-center flex gap-1 md:gap-4'><span><HiMiniUserMinus className='w-6 h-6 '/></span> 
                            {isPending ? "Logging Out" : "Logout"}
                            </p>
                        </div>                     
                    </div>
                </div>
                }
    

                <div className=' hidden md:flex md:flex-col md:absolute   border-slate-600'>
                    <div className={pathname === '/app' ? 'font-bold py-3 rounded-r-full px-14 mt-8 bg-slate-600 text-white': 'mt-8    border-slate-600  hover:bg-slate-600 hover:text-white font-bold px-14 bg-white  rounded-r-full py-3'}>
                        <p className=' text-center flex gap-1 md:gap-4'><span><HiOutlineBuildingLibrary className='w-6 h-6 '/></span> 
                            <NavLink to='/app'>
                                Home
                            </NavLink>
                        </p>
                    </div>

                    <div className={pathname === '/app/create'  ? 'font-bold py-3 px-14 mt-8 bg-slate-600   text-white rounded-r-full': 'mt-8    border-slate-600  hover:bg-slate-600 hover:text-white px-14 font-bold bg-white  rounded-r-full py-3'}>
                        <p className='text-center flex gap-1 md:gap-4'><span><HiPlus className='w-6 h-6 '/></span> 
                            <NavLink to='/app/create'>
                                Create Course
                            </NavLink>
                        </p>
                    </div>
                    
                    <div className={pathname ===  '/app/manage' ? 'font-bold py-3 px-14 mt-8 bg-slate-600  text-white rounded-r-full': 'mt-8   border-slate-600  hover:bg-slate-600 hover:text-white px-14 font-bold bg-white  rounded-r-full py-3'}>
                        <p className='text-center flex gap-1 md:gap-4'><span><HiOutlineFolder className='w-6 h-6 '/></span> 
                            <NavLink to='/app/manage'>
                                Manage Course
                            </NavLink>
                        </p>
                    </div>

                    <div className={pathname === '/app/account' ? 'py-3 font-bold   px-14 mt-8 bg-slate-600 text-white rounded-r-full': 'mt-8  border-slate-600  hover:bg-slate-600 hover:text-white px-14  font-bold bg-white rounded-r-full py-3'}>
                        <p className='text-center flex gap-1 md:gap-4'><span><HiMiniUserCircle className='w-6 h-6 '/></span> 
                            <NavLink to='/app/account'>
                                Account
                            </NavLink>
                        </p>
                    </div>  

                    
                    
                                          
                </div>
            </div>       
        
        </div>
    )
}