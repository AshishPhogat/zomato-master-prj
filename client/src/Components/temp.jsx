import React from "react";
import {useLocation} from "react-router-dom";


const Temp = (props)=>{
   const loc = useLocation();

   return <>
      <div>Hello this is a temp component {loc.pathname}</div>
   </>
}

export default Temp;