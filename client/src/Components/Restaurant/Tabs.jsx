import React from "react";
import {useLocation ,Link ,useParams} from "react-router-dom";


const Tab = (props)=>{
    const {id} = useParams();

    return <>
        <Link to={`/restaurant/${id}/${props.route}`}>
        <div className={props.isActive ?"text-zomato-400 font-light lg:font-base border-b-2  border-zomato-400 " :"text-gray-500 font-light lg:font-base"}>
            <h3 className="text-lg md:text-xl p-4">{props.title}</h3>
        </div>
        </Link>
    </>
}

const TabContainer = ()=>{
    const Location = useLocation();

    const currentPath = Location.pathname;

    const tabs = [{
        title:"Overview",
        route: "overview",
        isActive : currentPath.includes("overview"),

    },{
        title:"Order Online",
        route: "order-online",
        isActive : currentPath.includes("order-online"),

    },{
        title:"Reviews",
        route: "reviews",
        isActive : currentPath.includes("reviews"),

    },{
        title:"Menu",
        route: "menu",
        isActive : currentPath.includes("menu"),

    },{
        title:"Photos",
        route: "photos",
        isActive : currentPath.includes("photos"),

    },];

    return <>
        <div className="flex items-center   gap-3 md:gap-4 lg:gap-7 border-b-2  overflow-x-scroll">
            {tabs.map((tab)=>{
                return <Tab {...tab}  key={`123${tab.route}`} />
            })}
        </div>
    </>
}

export default TabContainer;