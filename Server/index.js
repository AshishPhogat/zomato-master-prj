// Importing Env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";


// microservice routes
import Auth from "./API/Auth";
import Restaurants from "./API/Restaurant";
import Foods from "./API/Food";
import Images from "./API/Image";
import Reviews from "./API/Reviews";
import Users from "./API/User";
import MailService from "./API/Mail";
import Menu from "./API/Menu" ;
import Payments from "./API/Payments";

// Database connection
import ConnectDB from "./database/connection";
import Mailgun from "mailgun-js";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());
zomato.use("/payments", Payments);

// passport cofiguration
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant",Restaurants);
zomato.use("/foods",Foods);
zomato.use("/image",Images);
zomato.use("/reviews",Reviews);
zomato.use("/user",Users);
zomato.use("/mail", MailService);
zomato.use("/menu",Menu);


zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is running 🚀"))
    .catch(() =>
      console.log("Server is running, but database connection failed... ")
    )
);