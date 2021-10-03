//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Models
import {UserModel} from "../../Database/user";

const Router = express.Router();

/*
Route      /signup
Des        Signup with email and password
Params      none
Access      public
Method      POST
*/
Router.post("/signup",async (req,res)=>{
    try{
        const doesUserExists = await UserModel.findByemailandPhone(req.body.credentials);

        //save to DB 
       const newUser =  await  UserModel.create(req.body.credentials);

        //generating the JWT token
        const token = newUser.generateJwtToken();

        //return 
        return res.status(200).json({token , status : "success"});

    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;