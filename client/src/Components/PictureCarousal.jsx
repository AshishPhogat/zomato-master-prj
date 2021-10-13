import React from "react";
import {IoMdArrowDropright} from "react-icons/io";


const PictureCarousal = ()=>{
    return <> 
        <div className="w-full h-40 md:h-56 lg:h-64 relative px-4 ">
            <div className="w-full h-full object-cover relative transition duration-700 ease-in-out ">
                <img className="w-full h-full rounded-lg" src="https://b.zmtcdn.com/data/pictures/2/58982/d7d979cf0a642b87ef7e30fef63cd4d9.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="food" />
            <div className="absolute bottom-0 w-full rounded-lg and h-full" style= {{background : "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"}} />
            </div>        
            <div className="absolute left-6 bottom-2 w-full  text-white">
                <h4 className="z-10">Onam Special</h4>
                <h6  className="z-10 flex items-center">15 places <IoMdArrowDropright /></h6>
            </div>
        </div>
        
    </>
}

export default PictureCarousal ;