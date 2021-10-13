import React from "react";
import {useParams} from "react-router-dom";

//component 
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import Nightlife from "../Components/Nightlife";

const Home = ()=>{
    const {type } = useParams();
    return <>
        {type === "delivery" && <Delivery />}
        {type === "diningOut" && <Dining />}
        {type === "nightLife" && <Nightlife />}
    </>
}


export default Home;