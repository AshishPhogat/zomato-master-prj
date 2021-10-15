import React from "react";
import MenuCollection from "../../Components/Restaurant/menuCollections";


//component
import FloatMenuButton from "../../Components/Restaurant/OrderOnline/FloatMenuButton";
import MenuListContainer from "../../Components/Restaurant/OrderOnline/MenuListContainer";


const OrderOnline =()=>{
    return <>
        <div>
            <aside className="hidden md:block w-1/4 border-r-2 overflow-y-scroll border-gray-200 h-screen"> 
            <MenuListContainer />
            <MenuListContainer />
            <MenuListContainer />
            </aside>
            <div className="w-full md:w-3/4 "></div>           
        </div>
            <FloatMenuButton />
    </>
}

export default OrderOnline ;