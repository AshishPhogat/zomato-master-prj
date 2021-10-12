import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const MobileNav = ()=>{
    return <>
        <div className="flex w-full items-center justify-between lg:hidden ">
            <div className="pl-3 w-24 h-5">
                <img className="w-full h-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
        </div>
            <div className="flex gap-2">
                <button className="text-sm text-white bg-zomato-400 p-1 rounded-full">Use App</button>
                <span><FaUserAlt className="text-3xl text-zomato-400 border-gray-300 border-2 p-1 rounded-full"  /></span>
            </div>
        </div>
    </>
}

const LargeNav = ()=>{
    return <>  
            <div className="container mx-auto px-20">
                <div className=" hidden w-full  md:px-4  lg:flex lg:items-center lg:gap-3">
                    <div className="">
                            <div className="pl-3 w-36 h-8 ">
                                    <img className="w-full h-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
                            </div>
                    </div>

                    <div className=" flex  container mx-auto items-center w-3/4   bg-white shadow-md px-1 py-3 border border-gray-200 rounded">

                        <div className="flex items-center   gap-2 border-r-2 border-gray-300">
                            <span><HiLocationMarker className="text-zomato-400 text-2xl"/></span>
                            <input className="focus:outline-none focus:ring-0" type="text "  placeholder="Bengaluru"/>
                            <span><IoMdArrowDropdown /></span>
                        </div>

                        <div className="flex items-center w-full gap-2">
                            <BsSearch className="text-gray-400 text-lg"/>
                            <input className="focus:outline-none focus:ring-0 w-full" type="search"  placeholder="Search for restaurant,cuisine or a dish" />
                        </div>

                    </div>
                    <div className="flex items-center ml-16 gap-8">
                        <button className="text-gray-500 hover:text-gray-700 text-xl ">Login</button>
                        <button className="text-gray-500 hover:text-gray-700 text-xl  ">Signup</button>
                    </div>
                </div>
            </div>
    </>
}

const Navbar =()=>{
    return <>
    <nav className="py-3 md:py-5 px-2 flex bg-white shadow  items-center  ">
        {/* mobile devices */}
        <MobileNav />

        {/* lg and md devices */}
        <LargeNav />
    </nav>
    </>
}

export default Navbar;