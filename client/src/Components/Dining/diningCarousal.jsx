import React from "react";
import Slider from "react-slick";

//component
import PictureCarousal from "../PictureCarousal";
import { PrevArrow,NextArrow } from "../carousalArrows";
const DiningCarousal  = ()=>{

    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: "400px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    return <> 
        <div className="w-full">
        <Slider {...settings}>
        <PictureCarousal />
        <PictureCarousal />
        <PictureCarousal />
        <PictureCarousal />
        <PictureCarousal />
        <PictureCarousal />
        </Slider>
        </div>
    </>
}


export default DiningCarousal ;