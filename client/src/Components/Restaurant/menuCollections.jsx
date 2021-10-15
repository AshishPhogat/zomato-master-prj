import React from "react";

const MenuCollection = (props)=>{
    return <>
        <div className="w-32 h-32 flex flex-col md:w-48 md:h-48">
            <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={props.image} alt="menu" className="w-full rounded-lg h-full transform transition duration-400  hover:scale-110" />
            </div>
            <strong>{props.menuTitle}</strong>
            <p className="text-gray-400 font-light text-xs">{props.pages} pages</p>
        </div>
    </>
}

export default MenuCollection ;