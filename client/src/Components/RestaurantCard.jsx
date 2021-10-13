import React from "react";
import {AiTwotoneStar} from "react-icons/ai";
const RestaurantCard=(props)=>{
    return <>
        <div className="bg-white px-3 mb-4 w-full rounded-2xl hover:shadow-lg transition duration-700 ease-in-out md:w-1/2 lg:w-1/3">
            <div className="w-full h-56 lg:h-64 relative">
                <div className="absolute flex items-end bottom-4 justify-between w-full">
                    <div className="flex flex-col gap-2 items-start">
                        {
                            props.isOff && (
                        <span className="bg-zomato-400 text-white px-2 py-1 text-sm rounded">{`Pro extra ${props.isOff}% off`}</span>
                            )
                        }
                        <span className="bg-blue-400 text-white px-2 py-1 rounded text-sm ">₹80 OFF</span>
                    </div>
                        <span className="bg-white bg-opacity-75 p-1 mr-3 rounded">{props.durationofDelivery} min</span>
                </div>
                <img src={props.photos && props.photos[0]}
                alt="food" 
                className="w-full h-full rounded-lg" 
                />
            </div>                 
                <div className="my-2 flex flex-col gap-2">
                    <div className="flex text-xl font-medium">
                        <h4>Behrouz Biryani</h4>
                        <span className="bg-green-800 flex items-center text-sm bg-opacity-75 p-1 mr-3 rounded">{props.RestaurantReviewValue} <AiTwotoneStar /></span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                        <p>{props.cuisine.join(", ")}</p>
                        <p>{`₹${props.averageCost} for one`}</p>
                    </div>
                </div>
        </div>
    </>
}

export default RestaurantCard;