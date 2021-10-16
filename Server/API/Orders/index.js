//Libraries
import express from "express";
import { get } from "mongoose";
import passport from "passport";

//Database
import {OrderModel} from "../../Database/allModels";

const Router = express.Router();


/*
Route     /
Des       Get all orders based on  id
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id",passort.authenticate("jwt",{session: false}),async (req,res)=>{
    try{
        const {_id} = req.params;
        const getOrders = await OrderModel.findOne({users : _id});

        if(!getOrders){
            return res.status(404).json({error : "User not found"});
        }
        return res.status(200).json({getOrders});
    }catch(error){
        return res.status(500).json({error : error.message});
    }
});

/*
Route     /new
Des       Add new orders
Params    _ id
Access    Public
Method    POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try{
        const { _id } = req.session.passport.user._doc
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {user : _id},
            {    $push : {orderDetials },},
            {   new : true}
        );
    }catch(error){
        return res.status(500).json({error : error.message});
    }
});
 

export default Router;