import Spin from "../assets/Spinner.svg"
export default function Spinner(){
    return(
        <div className="text-center -mt-28 flex justify-center h-screen">
            <img src={Spin} alt="" className="w-20 h-screen" />
        </div>
    )
}