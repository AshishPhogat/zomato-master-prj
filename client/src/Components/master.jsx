import React from "react";
import {useParams} from "react-router-dom";

//component 
import Delivery from "./Delivery";
import Dining from "./Dining";
import Nightlife from "./Nightlife";


const Master = ()=>{
    const {type } = useParams();
    return <>
        {type === "delivery" && <Delivery />}
        {type === "diningOut" && <Dining />}
        {type === "nightLife" && <Nightlife />}
    </>
}


export default Master;