// importing Env variables
require("dotenv").config();


//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

//databasae connection
import ConnectDB from "./Database/connection" ;

//mircoServices
import Auth from "./API/Auth";

const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended : false}));
zomato.use(helmet());
zomato.use(cors());

//Applications Routes
zomato.use("/auth",Auth);

zomato.get("/",(req,res)=>{
    res.json({message : "setup successful"});
});

zomato.listen(4000,()=>{
    ConnectDB().then(()=>{console.log("The server is running!!!🚀")})
    .catch(()=>{console.log("Server is running ,but the DB connection failed...")})
});
