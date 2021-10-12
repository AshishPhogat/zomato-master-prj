import React from "react";
import {FiShoppingBag} from "react-icons/fi";
import {BiDrink} from "react-icons/bi";
import {IoFastFoodOutline} from "react-icons/io5";


const MobileTab = ()=>{
    return<> 
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
            <div className="flex flex-col items-center text-xl">
                <FiShoppingBag/>
                <h5 text-bold text-sm>Delivery</h5>
            </div>
            <div className="flex flex-col items-center text-xl">
                <IoFastFoodOutline />
                <h5 text-bold text-sm>Dining Out</h5>
            </div>
            <div className="flex flex-col items-center text-xl">
                <BiDrink />
                <h5 text-bold text-sm>NightLife</h5>
            </div>
            
        </div>
    </>
}

const LargetTab = ()=>{
    return<>
        <div className=" hidden  lg:flex gap-14 container px-20 mx-auto">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 p-4 bg-gray-100 rounded-full">
                        <img className="w-full h-full " src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="delivery" />
                    </div>
                    <h3 className="text-xl text-gray-500 font-medium">Delivery</h3>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 p-4 bg-gray-100 rounded-full">
                        <img className="w-full h-full " src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="delivery" />
                    </div>
                    <h3 className="text-xl text-gray-500 font-medium">Dining Out</h3>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 p-4 bg-gray-100 rounded-full">
                        <img className="w-full h-full " src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="delivery" />
                    </div>
                    <h3 className="text-xl text-gray-500 font-medium">Nightlife</h3>
                </div>
                            
        </div>    
    </>

}


const FoodTab = ()=>{
    return <>
        <div>
            <MobileTab />
            <LargetTab />
        </div>
    </>
}

export default FoodTab;