import React from "react";
import Slider from "react-slick";

//component
import PictureCarousal from "../PictureCarousal";
import { PrevArrow,NextArrow } from "../carousalArrows";
const NightlifeCarousal  = ()=>{

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
        
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


export default NightlifeCarousal ;