import React from "react";

const InfoButtons = (props)=>{
    return <>
            <button className={props.isActive ?"flex px-4 py-2 items-center text-white   rounded-lg bg-zomato-400" :"flex  items-center px-4 py-2 rounded-lg  gap-3 bg-white border border-gray-400" }>
                {props.children}
                </button>

     </>
}

export default InfoButtons ;