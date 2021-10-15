import React from "react";
import { Link,useParams } from "react-router-dom";
import {IoMdArrowDropright} from  "react-icons/io";
import Slider from "react-slick";


//component
import MenuCollection from "../../Components/Restaurant/menuCollections";
import MenuSimilarRestaurantCard from "../../Components/Restaurant/MenuSimilarRestaurantCard";
import { NextArrow,PrevArrow } from "../../Components/carousalArrows";

const OverviewPage = ()=>{
    const {id} = useParams();

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    return <> 
       <div className="container mx-auto ">
            <div className="flex relative flex-col md:flex-row p-2 reltive">
                <div className="w-3/4">
                    <h2 className="font-semibold text-lg md:text-xl">About this place</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4> 
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">See all menu <IoMdArrowDropright /></span>
                        </Link >
                        
                    </div>
                    <div className="flex flex-wrap gap-3">
                            <MenuCollection menuTitle="Menu" pages="3" image="https://b.zmtcdn.com/data/menus/971/52971/98e728872b6f968251d239411455d54f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
                    </div>
                    <h4 className="text-lg font-medium">Cuisines</h4> 
                    <div className="flex flex-wrap gap-2">
                        <span className="border text-blue-600 border-gray-600 px-2 py-1 rounded-full ">Street Food</span >
                        <span className="border text-blue-600 border-gray-600 px-2 py-1 rounded-full ">Street Food</span >
                        <span className="border text-blue-600 border-gray-600 px-2 py-1 rounded-full ">Street Food</span >
                    
                    </div>
                    <div className="my-4">
                    <h4 className="text-lg font-medium">Average Cost</h4> 
                    <h6>₹100 for one (approx.)</h6>
                    <small>Exclusive of applicable taxes and charges</small>
                    </div>
                        <Slider {...settings} >
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                        </Slider>
                </div>
                <aside className="w-56 h-96 sticky top-56 my-2   bg-red-200"></aside>
            </div>
       </div>
    </>
}


export default OverviewPage ;