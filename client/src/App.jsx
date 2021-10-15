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
import OrderOnline from "./Page/restaurant/order-online";
import Reviews from "./Page/restaurant/Reviews";
import Menu from "./Page/restaurant/Menu";
import Photos from "./Page/restaurant/Photos";

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
      <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Reviews} />
      <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Photos} />
  </>
}

export default App;
