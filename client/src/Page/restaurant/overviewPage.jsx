import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";   
import ReactStars from "react-rating-stars-component";


//component
import MenuCollection from "../../Components/Restaurant/menuCollections";
import MenuSimilarRestaurantCard from "../../Components/Restaurant/MenuSimilarRestaurantCard";
import { NextArrow,PrevArrow } from "../../Components/carousalArrows";
import ReviewCard from "../../Components/Restaurant/Reviews/reviewCard";
import MapView from "../../Components/Restaurant/mapView";

import { getImage } from "../../Redux/Reducer/Image/Image.action";

const OverviewPage = ()=>{
  const [menuImage, setMenuImages] = useState({ images: [] });

    const {id} = useParams();

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
     
      const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
      );
      const dispatch = useDispatch();
    
      useEffect(() => {
        if (reduxState) {
          dispatch(getImage(reduxState?.menuImage)).then((data) => {
            const images = [];
            data.payload.image.images.map(({ location }) => images.push(location));
            setMenuImages(images);
          });
        }
      }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },]
      };

    return <> 
       <div className="container mx-auto w-full ">
            <div className="flex relative flex-col p-2 md:flex-row  reltive">
                <div className="w-full md:w-8/12 p-3 ">
                    <h2 className="font-semibold text-lg md:text-xl">About this place</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4> 
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">See all menu <IoMdArrowDropright /></span>
                        </Link >
                        
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                    <MenuCollection menuTitle="Menu" pages="3" image={menuImage} />
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
                    <div className="container mx-auto my-5 pr-8 w-full">
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
                <aside className="hidden w-full md:w-4/12 md:h-1/4 md:flex flex-col  md:sticky top-60 my-4 gap-1 p-3 rounded-lg z-10 bg-white-200rounded-lg" style={{"box-shadow": "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
                    <MapView title="SMOOR" phoneNumber={["+919742572268","+917406322688","+919742524178"]} mapLocation={[13.214621251782804, 77.73287444245135]} address="12/1, Swami Vivekananda Road, Jayaraj Nagar, Ulsoor, Bangalore"/>
                    
                </aside>
            </div>
       </div>
    </>
}


export default OverviewPage ;