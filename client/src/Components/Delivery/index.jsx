import React,{useState} from "react";


//component 
import DeliveryCarousal from "./deliveryCarousel";
import Brand from "./brand";
import RestaurantCard from "../RestaurantCard";


const Delivery = ()=>{

    const [restaurantList , setRestaurantList] = useState([{
        _id :"123456",
        photos:["https://b.zmtcdn.com/data/pictures/chains/1/50691/92d9b4053ef0965120828b4fa4eecc3b_o2_featured_v2.jpg?output-format=webp",],
        name : "Meghana Foods",
        cuisine : ["Andhra","North India","Seafood","Biryani"],
        averageCost : 100,
        isPro : true,
        isOff : 80,
        durationofDelivery: 42,
        RestaurantReviewValue: 4.1,
    },{
        _id :"123456-2",
        photos:["https://b.zmtcdn.com/data/pictures/7/51887/4cf07c9eba37585a210374100634f96f_o2_featured_v2.jpg?output-format=webp",],
        name : "Sahana's Nati Style",
        cuisine : ["South India","Biryani","Fast Food"],
        averageCost : 350,
        isPro : true,
        isOff : 10,
        durationofDelivery: 47,
        RestaurantReviewValue: 4.3,
    },{
        _id :"123456-2",
        photos:["https://b.zmtcdn.com/data/pictures/7/51887/4cf07c9eba37585a210374100634f96f_o2_featured_v2.jpg?output-format=webp",],
        name : "Sahana's Nati Style",
        cuisine : ["South India","Biryani","Fast Food"],
        averageCost : 350,
        isPro : true,
        isOff : 10,
        durationofDelivery: 47,
        RestaurantReviewValue: 4.3,
    },{
        _id :"123456-2",
        photos:["https://b.zmtcdn.com/data/pictures/7/51887/4cf07c9eba37585a210374100634f96f_o2_featured_v2.jpg?output-format=webp",],
        name : "Sahana's Nati Style",
        cuisine : ["South India","Biryani","Fast Food"],
        averageCost : 350,
        isPro : true,
        isOff : 10,
        durationofDelivery: 47,
        RestaurantReviewValue: 4.3,
    },{
        _id :"123456-2",
        photos:["https://b.zmtcdn.com/data/pictures/7/51887/4cf07c9eba37585a210374100634f96f_o2_featured_v2.jpg?output-format=webp",],
        name : "Sahana's Nati Style",
        cuisine : ["South India","Biryani","Fast Food"],
        averageCost : 350,
        isPro : true,
        isOff : 10,
        durationofDelivery: 47,
        RestaurantReviewValue: 4.3,
    },{
        _id :"123456-2",
        photos:["https://b.zmtcdn.com/data/pictures/7/51887/4cf07c9eba37585a210374100634f96f_o2_featured_v2.jpg?output-format=webp",],
        name : "Sahana's Nati Style",
        cuisine : ["South India","Biryani","Fast Food"],
        averageCost : 350,
        isPro : true,
        isOff : 10,
        durationofDelivery: 47,
        RestaurantReviewValue: 4.3,
    },
]);
    return<> 
        <DeliveryCarousal />
        <div className="my-5">
        <Brand />
        </div>
        <div className="flex flex-wrap justify-between " >
            {
                restaurantList.map((item)=>{
                    return <RestaurantCard {...item} key={item._id} />
                })
            }
        </div>
    </>
}
export default Delivery;