import React from "react";
import Slider from "react-slick";

//component
import { PrevArrow,NextArrow } from "../carousalArrows";


const Brand = (props)=>{
    const logos =["https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png","https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383019.png",
"https://b.zmtcdn.com/data/brand_creatives/logos/2159c4a55b3ff2362678141e6a83645f_1622476257.png","https://b.zmtcdn.com/data/brand_creatives/logos/0a8086a96c6bb8c1f3006e3a84488e1f_1605160890.png","https://b.zmtcdn.com/data/brand_creatives/logos/7cbdbcec54cf7a207bcc565067cf8993_1617875078.png",
"https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502580.png"];
    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        centerPadding:"450px",
        slidesToScroll: 3,
        centerPadding: "400px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive :[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 324,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
              }
        ],
      };

    return <> 
        <Slider {...settings}>
            {
                logos.map((logo)=>{
                   return (<>
                    <div className="w-24 h-24 bg-white shadow mx-3">
                        <img  src={logo} alt="brand" className="w-full h-full"/>
                    </div>
                   </>);
                })
            }
        </Slider>
    </>
}

export default Brand;