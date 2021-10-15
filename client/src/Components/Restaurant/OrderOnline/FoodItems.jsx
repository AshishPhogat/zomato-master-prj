import React from "react";
import ReactStars from "react-rating-stars-component" ;
import {BsPlus} from "react-icons/bs";


const FoodItems =(props)=>{
return <>

            <div className="flex items-start px-2 justify-between gap-3">
                <div className="w-3/4 flex justify-start gap-2 ">
                <div className="w-36 h-36">
                    <img 
                        src={props.image}
                        alt= "food"
                        className="w-full h-full rounded-lg"
                    />
                </div>

                <div className="w-3/6 flex flex-col pt-2 gap-1 ">
                    <h3 className="font-semibold">{props.title}</h3>
                    <ReactStars count={5}  value={props.rating}/>
                    <h5>₹{props.price}</h5>
                    <p className="truncate pt-3">{props.description}</p>
                </div>
                </div>
                <div className="3/12">
                    <button className="flex flex-row-reverse md:flex-row items-center md:gap-2  text-zomato-400 bg-zomato-50  px-3  border md:px-4  md:py-2 rounded-lg border-zomato-400">
                        <BsPlus />Add
                        </button>
                </div>
            </div>
    </>
}

export default FoodItems;