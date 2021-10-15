import React from "react";
import {TiStarFullOutline} from "react-icons/ti";


const ReviewCard = ()=>{
    return <>
        <div className="">
            <div className="my-2 flex items-center justify-between">
               <div className="flex  items-center gap-2">
                    <div className="w-10 h-10 rounded-full">
                            <img className="w-full h-full rounded-full object-cover" src="https://b.zmtcdn.com/data/user_profile_pictures/7a3/e0c8e652cbb342f8f0d8c325b512a7a3.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="avatar" />
                        </div>
                   
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold">Pavan Kumar</h3>
                        <small>5 Reviews &bull; 3 followers</small>
                    </div>
                </div>
              
            <button className="text-zomato-400 py-1 px-2 rounded-lg border border-zomato-400">Follow</button>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
                    3 <TiStarFullOutline />
                </span>
                <h5 className="font-regular uppercase">Delivery</h5>
                <small className="text-gray-500">3 days ago</small>
            </div>
            <p className="w-full  text-gray-600 font-light text-base">
            rice was not cooked well and had only 1 small piece in biriyani
            </p>
        </div>
    
    </>
}

export default ReviewCard ;