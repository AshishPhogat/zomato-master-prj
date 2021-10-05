//Libraries
import express from "express";
import passport from "passport";

//Database
import {UserModel} from "../../Database/allModels";

const Router = express.Router();


/*
Route     /
Des        get user data using id
Params    _id
Access    Public
Method    GET 
*/
Router.get("/:_id",async (req,res)=>{
    try{
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        return res.status(200).json({getUser});
    }catch(error){
        return res.status(500).json({error : error.message});
    }
});


/*
Route     /update
Des        update user id
Params    _id
Body        user Data
Access    Public
Method    PUT 
*/
Router.put("/update/:_id",(req,res)=>{
    try{
        const {_id } = req.params;
        const {userData} = req.body;

        const updatedUserData = await UserModel.findByIdAndUpdate(_id,
            {
            $set : userData,   
            },{
            new : true,
        });
        return res.json({updatedUserData});
    }catch(error){
        return res.status(500).json({error : error.message});
    }
} )
export default Router;