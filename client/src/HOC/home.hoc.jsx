import React from "react";
import {Route} from "react-router-dom";


//Layout
import HomeLayout from "../Layout/home.layout";

const HomeLayoutHOC = ({component:Component,...rest})=>{
    return <>
    <Route {...rest} component={(props)=>{
       return (
            <>
                <HomeLayout>
                <Component {...props} />
                </HomeLayout>
            </>
       );
    }}/>
     </>
};


export default HomeLayoutHOC;   