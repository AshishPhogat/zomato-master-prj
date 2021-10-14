import React from "react";
import {AiTwotoneStar} from "react-icons/ai";
import {TiStarOutline} from "react-icons/ti";
import {FaDirections} from "react-icons/fa";
import {BsBookmarkPlus} from "react-icons/bs";
import {RiShareForwardLine} from "react-icons/ri";


//component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import RestaurantInfo from "../Components/Restaurant/restaurantinfo";
import InfoButtons from "../Components/Restaurant/infoButton";
import TabContainer  from "../Components/Restaurant/Tabs";


const RestaurantLayout = ()=>{
    const images=["https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",  
];
    return <> 
            <RestaurantNavbar />
        <div className="container mx-auto my-5 px-4 lg:px-20">
            <ImageGrid image={images} />   

        <div>
           <RestaurantInfo name="SMOOR" restaurantRating="3.5" deliveryRating="3.2" cuisine={["Desserts", "Beverages", "Bakery", "Shake"]}  address="1 MG Road Mall, MG Road, Bangalore"/>
        </div>

        <div className="my-4 flex flex-wrap gap-3 items-center">
            <InfoButtons isActive >
                <TiStarOutline /> Add Review
            </InfoButtons>
            <InfoButtons  >
               <FaDirections className="text-red-500 text-lg" /> Direction
            </InfoButtons>
            <InfoButtons  >
                <BsBookmarkPlus className="text-red-500 text-lg" /> Bookmark
            </InfoButtons>
            <InfoButtons  >
                <RiShareForwardLine className="text-red-500 text-lg"  /> Share
            </InfoButtons>
        </div>
        <TabContainer />
        </div>
        
    </>
}

export default RestaurantLayout ;