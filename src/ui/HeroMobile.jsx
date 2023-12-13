import dataBiz from '../assets/client-databiz.svg';
import audioPhile from '../assets/client-audiophile.svg';
import meet from '../assets/client-meet.svg';
import maker from '../assets/client-maker.svg';


export default function HeroMobile(){
    return(
        <div className='flex gap-4 justify-center mt-8 pb-9 md:hidden'>
            <div>
            <img src={dataBiz} alt="databiz" className='w-16 h-5' />
            </div>
            <div>
            <img src={audioPhile} alt="audiophile" className='w-16 h-5' />
            </div>
            <div>
            <img src={meet} alt="meet" className='w-16 h-5' />
            </div>
            <div>
            <img src={maker} alt="maker" className='w-16 h-5' />
            </div>
        </div> 
    )
}