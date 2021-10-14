import React from "react";
import {AiOutlineCamera} from "react-icons/ai";


const ImageGrid = (props)=>{
    return <> 
            <div className="w-full h-60 md:hidden">
                <img className="w-full h-full rounded-lg " src={props.image[0]} alt="restaurant image" /> 
            </div> 
             
            <div className="hidden w-full rounded-lg h-96 md:flex gap-1">
                <div className="w-full h-full overflow-hidden ">
                    <img className="w-full rounded-lg hover:scale-110 transform transition duration-500 h-full" src={props.image[0]} alt="restaurant image" /> 
                </div>
                    
                <div className="w-1/4 h-full flex flex-col gap-2 overflow-hidden ">
                    <img className="w-full rounded-lg h-full hover:scale-110 transform transition duration-500" src={props.image[1]} alt="restaurant image" /> 
                    <img className="w-full rounded-lg h-full hover:scale-110 transform transition duration-500" src={props.image[2]} alt="restaurant image" /> 
                </div> 
                <div className="w-1/4 h-full flex flex-col gap-2 overflow-hidden ">
                    <div className="w-full h-full relative">
                    <img className="w-full rounded-lg h-full hover:scale-110 transform transition duration-500" src={props.image[3]} alt="restaurant image" />
                    <div className="absolute inset-0  bg-opacity-40 bg-black w-full h-full rounded-lg"></div> 
                    <h4 className="absolute inset-y-2/4 z-20 w-full text-center font-semibold text-white">View Galary</h4>
                    </div>
                    <div className="w-full h-full relative">
                    <img className="w-full rounded-lg h-full hover:scale-110 transform transition duration-500" src={props.image[4]} alt="restaurant image" />
                    <div className="absolute inset-0  bg-opacity-90 bg-gray-400 w-full h-full rounded-lg">
                    </div> 
                    <div className="absolute flex flex-col items-center  inset-y-1/3 z-20 w-full text-center font-semibold text-white">
                    <div className="p-1 bg-black rounded-full relative bg-opacity-50 ">
                    <AiOutlineCamera className="text-xl" />
                    </div> 

                    <h4>Add Photos</h4>
                     
                    </div>
                    </div>
                </div>
             </div>
    </>
}

export default ImageGrid ;