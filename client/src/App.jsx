import React from "react";
import {Route,Redirect} from "react-router-dom";

//HOC 
import HomeLayoutHOC from "./HOC/home.hoc";
import RestaurantLayoutHOC from "./HOC/restaurant.hoc";


//components
import Temp from "./Components/temp";

//pages
import Home from "./Page/home";
import OverviewPage from "./Page/restaurant/overviewPage";


function App() {
  return<>
      <Route path="/" exact >
          <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact >
          <Redirect to="/restaurant/:id/overview" />
      </Route>
      <HomeLayoutHOC path="/:type" exact  component= {Home}  />
      
      <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={OverviewPage} />
      <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={Temp} />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Temp} />
      <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Temp} />
      <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Temp} />
  </>
}

export default App;
