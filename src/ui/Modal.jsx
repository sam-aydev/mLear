import { HiMiniXMark } from "react-icons/hi2";

export default function Modal({children, setIsOpenModal}){
    return(
        <div className="">
            <div className="fixed bg-black bg-opacity-25  z-50 inset-0 items-center flex justify-center ">
                <div className="bg-white p-2  rounded ">
                    <button className="fixed right-1/5" onClick={() =>setIsOpenModal(false)}><HiMiniXMark className="w-7 h-7 "/></button>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}