import React from "react";
import Slider from "react-slick"


//component
import DeliveryCategory from "./deliveryCategory";
import { PrevArrow,NextArrow } from "../carousalArrows";


const DeliveryCarousal = ()=>{

    const categories=[{ 
        image: "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
        title: "Chicken",
    },{ 
        image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        title: "Pizza",
    },{ 
        image: "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
        title: "Biryani",
    },{ 
        image: "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
        title: "Burger",
    },{ 
        image: "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
        title: "Cake",
    },{ 
        image: "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
        title: "Chaat",
    },]

    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: "400px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

      };

    return <> 
        <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>

        <div className="lg:hidden flex flex-wrap justify-between gap-3 lg:gap-0 ">
        {
                categories.map((item)=>{
                    return <DeliveryCategory {...item}/>
                })
            }
        </div>

        <div className="hidden container mx-auto  lg:block">
            <Slider {...settings}>
            {
                categories.map((item)=>{
                    return <DeliveryCategory {...item}/>
                })
            }   
            </Slider>
        </div>
    </>
}


export default DeliveryCarousal;