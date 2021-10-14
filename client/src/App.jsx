import React from "react";
import {Route,Redirect} from "react-router-dom";

//HOC 
import HomeLayoutHOC from "./HOC/home.hoc";
import RestaurantLayoutHOC from "./HOC/restaurant.hoc";


//components
import Temp from "./Components/temp";

//pages
import Home from "./Page/home";


function App() {
  return<>
      <Route path="/" exact >
          <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact  component= {Home}  />
      <RestaurantLayoutHOC pat="/restaurant/:id" exact component={Temp} />
  </>
}

export default App;
