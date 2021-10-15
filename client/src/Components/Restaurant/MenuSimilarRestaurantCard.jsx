import React from "react";
import {TiStar} from "react-icons/ti";


const MenuSimilarRestaurantCard = (props)=>{
    return <> 
        <div className=" bg-white shadow  h-68 w-60 md:w-52 mx-2  md:h-68 rounded-md">
        <div className="w-full h-40  ">
            <img  src={props.image}  alt="food" className="w-full h-full object-cover rounded-t-lg" />
        </div>
        <div className="flex flex-col p-2 gap-2">
            <h3 className="text-sm my-1 font-semibold">{props.title}</h3>
            <div className="flex justify-between items-center ">
                <span className="flex items-center gap-1 border-r h-4 pr-2 border-gray-400  ">
                    <span className="flex items-center gap-1 bg-green-700 text-white px-1 md:text-xs rounded"> 3.0 <TiStar /></span>
                    Dining
                </span>
                <span className="flex items-center gap-1 border-r-1 pr-2 border-gray-500  ">
                    <span className="flex items-center gap-1 bg-green-700 text-white  md:text-xs  rounded"> 3.0 <TiStar /></span>
                    Delviery
                </span>
            
            </div>
            <h4>Street Food, Beverages, Tea</h4>
        </div>
    </div>
    </>
}

export default MenuSimilarRestaurantCard ;