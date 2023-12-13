import { Link } from "react-router-dom";

export default function NavComp(){

    return(
        <div>
            <div className='flex space-x-14 '>
                <Link to='/'>
                    <p className="text-4xl font-bold md:font-extrabold mt-3 ">mLearn.</p>
                </Link>
                


                <ul className='list-none  gap-10 flex'>
                    <li className='hidden md:flex mt-7'>Careers</li>
                    <li className='hidden md:flex mt-7'>About</li>
                </ul>
            </div>
          

            
        </div>
    )
}