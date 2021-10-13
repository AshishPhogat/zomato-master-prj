import React from "react";
import {useParams} from "react-router-dom";

//component 
import Delivery from "./Delivery";
import Dining from "./Dining";


const Master = ()=>{
    const {type } = useParams();
    return <>
        {type === "delivery" && <Delivery />}
        {type === "diningOut" && <Dining />}
    </>
}


export default Master;