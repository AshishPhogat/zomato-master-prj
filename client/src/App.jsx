import { Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";



// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/restaurant.hoc";
import CheckoutLayoutHOC from "./HOC/Checkout.Hoc";

// pages
import Home from "./Page/home";
import Overview from "./Page/restaurant/overviewPage";
import OrderOnline from "./Page/restaurant/order-online";
import Reviews from "./Page/restaurant/Reviews";
import Menu from "./Page/restaurant/Menu";
import Photos from "./Page/restaurant/Photos";
import Checkout from "./Page/Checkout";
import RedirectRestaurant from "./Page/restaurant/Redirect";
import GoogleAuth from "./Page/GoogleAuth";

// redux action
import { getMyself } from "./Redux/Reducer/User/user.action";

// axios global settings
if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}



function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.zomatoUser) dispatch(getMyself());
  }, []);
  
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact component={RedirectRestaurant} />


      <HomeLayoutHOC path="/:type" exact component={Home} />

      <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />

      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Reviews}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />
      <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout} />
    </>
  );
}

export default App;