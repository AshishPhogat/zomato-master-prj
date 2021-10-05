//Libraries
import express from "express";
import passport from "passport";

//Database
import {RestaurantModel} from "../../Database/allModels";

//validation
import { validataeRestaurantCity,validataeRestaurantSearchString } from "../../Validation/restaurant";
import { validateRestaurantId } from "../../Validation/food";

const Router = express.Router();
/*
Route     / 
Des       Get all the restaurant details based on city
Params    none
Access    Public
Method    GET  
*/
Router.get("/", async (req,res)=>{

    try{
        //validate the restaurant city
        await validataeRestaurantCity(req.query);

        const {city} = req.query;
        const allRestaurants = await RestaurantModel.find({city});

        return res.status(200).json({ allRestaurants});
    }catch(error){
        return res.status(500).json({error : error.message});
    }
});

/*
Route     / 
Des       Get individual restaurant details based on id
Params    id
Access    Public
Method    GET  
*/
Router.get("/:_id",async (req,res)=>{
    try{
        //validate the restaurant id
        await validateRestaurantId(req.params);

        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if(!restaurant){
            return res.status(404).json({error : "Restaurant not found"});
        }

        return res.status(200).json({restaurant});

    }catch(error){
        return res.status(500).json({error : error.message});
    }
});

/*
Route     /search 
Des       Get restaurant details using search string
Params    none
Body      searchString
Access    Public
Method    GET  
*/
Router.get("/search", async (req,res)=>{
    try{
        //validate search String
        await validataeRestaurantSearchString(req.body);

        const {searchString} = req.body ;

        const restaurants  = await RestaurantModel.find({name : {$regix : searchString, $options : "i"}});

        if(!restaurants){
            return res.status(404).json({error : ` No restaurants matched with ${searchString}`});
        }
    }catch(error){
        return res.status(500).json({error : error.message});
    }
});

export default Router;