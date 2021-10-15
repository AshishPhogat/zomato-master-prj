import React from "react";
import MenuCollection from "../../Components/Restaurant/menuCollections";
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";

//component
import FloatMenuButton from "../../Components/Restaurant/OrderOnline/FloatMenuButton";
import MenuListContainer from "../../Components/Restaurant/OrderOnline/MenuListContainer";
import FoodItems from "../../Components/Restaurant/OrderOnline/FoodItems";

const OrderOnline =()=>{
    return <>
        <div className="flex w-full">
            <aside className="hidden md:block w-1/4 border-r-2 overflow-y-scroll border-gray-200 h-screen"> 
            <MenuListContainer />
            <MenuListContainer />
            <MenuListContainer />
            </aside>
            <div className="w-full px-3 md:w-3/4 ">
                <h2 className="text-3xl ">Order Online </h2> 
                <h4 className="flex items-center gap-2 font-light text-gray-500">
                <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                </h4>

                <h2 className="text-3xl z-30 md:sticky top-56 bg-white border-b border-gray-300 font-base py-3">Recommended </h2> 
                <section className=" pt-2">
                    <FoodItems price="1000" rating={3} title="Andhra Mutton Biryani Family Pack" image="https://b.zmtcdn.com/data/dish_photos/612/2998605f31f134c65bd12e1367ea6612.jpg?fit=around|130:130&crop=130:130;*,*" description="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                </section>
            </div>           
        </div>
            <FloatMenuButton />
    </>
}

export default OrderOnline ;