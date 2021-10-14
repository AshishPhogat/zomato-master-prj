import React from "react";
import {Route} from "react-router-dom";


//Layout
import RestaurantLayout from "../Layout/restaurant.layout";


const RestaurantLayoutHOC= ({component:Component,...rest})=>{
    return <>
    <Route {...rest} component={(props)=>{
       return (
            <>
                <RestaurantLayout>
                <Component {...props} />
                </RestaurantLayout>
            </>
       );
    }}/>
     </>
};


export default RestaurantLayoutHOC;   