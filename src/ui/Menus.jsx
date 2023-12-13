import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";

const MenusContext = createContext()

export default function Menus({children}){
    const [openId, setOpenId] = useState('');
    const [position, setPosition] = useState(null);

    const close = () => setOpenId('');
    const open = setOpenId;

    return <MenusContext.Provider value={{openId, close, open, position, setPosition}}>{children}</MenusContext.Provider>
}

function Toggle({id}){
    const {openId, close, open, setPosition} = useContext(MenusContext)
   
    function handleClick(e){
        const rect = e.target.closest("button").getBoundingClientRect();
        setPosition({
            x: window.innerWidth - rect.width - rect.x - 20,
            y: rect.y + rect.height + 8,
            
        })
        openId === "" || openId !== id ? open(id) : close()
    }

    return <button onClick={handleClick}><HiEllipsisVertical className="w-7 h-7"/></button>
}

function List({children, id}){
    const {openId, position} = useContext(MenusContext);

    if(openId !== id) return null;
    
    const Xaxis = (Math.round(position.x))
    const Yaxis = (Math.round(position.y))    

    return createPortal(
        <ul style={{top:(Yaxis), right: (Xaxis)}} className={`fixed  bg-black  h-1/4  w-28  py-2 rounded-xl`}>
            {children}
        </ul>, document.body
    )
}

function Button({children, icon, onClick}){
    const {close}  = useContext(MenusContext)
    function handleClick(){
        onClick?.();
        close()
    }

    return(
        <li className="flex px-4 space-x-4 text-white">
            <span className="mt-4">{icon}</span>
            <button onClick={handleClick} className="mt-3">
                {children}
            </button>
        </li>
    )
}

function Menu({children}){
    return(
        <div className="bg-white text-black px-2 py-2">
            {children}
        </div>
    )
    
}

Menus.Menu  = Menu;
Menus.Button = Button;
Menus.Toggle = Toggle;
Menus.List = List;