//Libraries
import express from "express";
import passport from "passport";

//Database
import {ReviewModel} from "../../Database/allModels";

const Router = express.Router();


/*
Route     /new
Des        Add new food review /rating
Params    none
Body        review Object
Access    Public
Method    POST 
*/
Router.post("/new",async (req,res)=>{
    try{
        const {reviewData   } = req.body;  

        const addReviewData = await ReviewModel.create(reviewData);

        return res.status(200).json({message : "Review created successfully!"});
        
    }catch(error){
        return res.status(500).json({error : error.message});
    }
});

/*
Route     /delete
Des        delete a review by id
Params    _id
Access    Public
Method    DELETE
*/
Router.delete("/delete/:_id", async (req,res)=>{
    try{
        const {_id} = req.paramas;
        
        await ReviewModel.findByIdAndDelete( _id );

        return res.status(200).json({message : "Review  Deleted Successfully!!"});
    }catch(error){
        return res.status(500).json({error : error.message});
    }
});

export default Router;