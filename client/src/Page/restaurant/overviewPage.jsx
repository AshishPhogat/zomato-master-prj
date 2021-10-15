import React from "react";
import { Link,useParams } from "react-router-dom";
import {IoMdArrowDropright} from  "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

//component
import MenuCollection from "../../Components/Restaurant/menuCollections";
import MenuSimilarRestaurantCard from "../../Components/Restaurant/MenuSimilarRestaurantCard";
import { NextArrow,PrevArrow } from "../../Components/carousalArrows";
import ReviewCard from "../../Components/Restaurant/Reviews/reviewCard";


const OverviewPage = ()=>{
    const {id} = useParams();

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    return <> 
       <div className="container mx-auto w-full ">
            <div className="flex relative flex-col p-2 md:flex-row  reltive">
                <div className="w-9/12 p-3 ">
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
                    <div className="container mx-auto pr-8 w-full">
                        <Slider {...settings} >
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18578798/1e4edff7ceed9a740575aeceff032e92_featured_v2.jpg?output-format=webp" title="TBC Sky Lounge"/>
                        </Slider>
                    </div>
                    <h4 className="text-lg font-medium">Rate Your Delivery Experience</h4> 
                    <ReactStars
                        count={5}
                        isHalf={true}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
                <aside className="w-3/12 h-96 sticky top-60 my-4  p-3 rounded-lg z-10 bg-white-200" style={{"box-shadow": "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
                    <h4 className="text-xl font-normal">Call</h4> 
                    <div className="my-2">
                        <h5 className="text-zomato-200 font-base">+919742572268</h5>
                        <h5 className="text-zomato-200 font-base">+917406322688</h5>
                        <h5 className="text-zomato-200 font-base">+919742524178</h5>
                    </div>

                    <h4 className="text-xl font-normal">Directions</h4> 
                    <div className="w-full h-48">
                        <MapContainer center={[13.214621251782804, 77.73287444245135]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[13.214621251782804, 77.73287444245135]}>
                                <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    
                </aside>
            </div>
       </div>
    </>
}


export default OverviewPage ;