import React from "react";
import {AiTwotoneStar } from "react-icons/ai";

const RestaurantInfo = (props)=>{
    return <>
         <div className="flex my-5 flex-col-reverse md:flex-row md:items-center gap-3 justify-between">
                <h1 className="text-xl md:text-3xl font-semibold md:font-bold "> {props.name}</h1>
                <div className="flex items-center text-sm md:text-base gap-4">
                <div className="flex  gap-2 items-center">
                    <span className="flex items-center gap-1  rounded-md font-medium  text-white bg-green-600 px-2">{props.restaurantRating} <AiTwotoneStar /></span>
                    <span>
                        <strong>2</strong>
                        <p className="border-dashed  border-b ">Dining reviews</p>
                    </span>
                    </div>
                    <div className="flex gap-2 items-center">
                    <span className="flex items-center gap-1  rounded-md font-medium  text-white bg-green-600 px-2">{props.deliveryRating}  <AiTwotoneStar /></span>
                    <span>
                        <strong>2</strong>
                        <p className="border-dashed border-b ">Delivery reviews</p>
                    </span>
                    </div>
                </div>
            </div>
            
            <div className="text-base md:text-lg text-gray-600">
                <h3 >{props.cuisine.join(", ")}</h3>
                <h3 className="text-gray-400">{props.address}</h3>
                <h3><span className="text-yellow-500">Open Now -</span>10am – 8:30pm (Today)</h3>
            </div>
     </>
}

export default RestaurantInfo ;