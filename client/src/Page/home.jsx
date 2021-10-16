import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import { useDispatch } from "react-redux";

//component 
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import Nightlife from "../Components/Nightlife";

// redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const Home = ()=>{
    const {type } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getRestaurant());
    }, []);
    
    return <>
        {type === "delivery" && <Delivery />}
        {type === "diningOut" && <Dining />}
        {type === "nightLife" && <Nightlife />}
    </>
}


export default Home;