//Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

//Database
import {ImageModel} from "../../Database/images";

//Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});


/*
Route     /u/images
Des       Uploads given images to S3 bucket ,and saves file link to mongodb
Params    none
Access    Public
Method    POST  
*/
Router.post("/u/images", upload.single("file") ,async (req,res)=>{
    try{
        
        const file = req.file;  

        const bucketOptions= {
            Bucket : "shapeaijunebatch123",
                key : file.originalname,
            Body   : file.buffer,
            contentType : file.mimetype,
            ACL : "public-read",    //Access Control List
        }

        const uploadImage = await s3Upload(bucketOptions);

        res.status(200).json({uploadImage});
    }catch(error){
        return res.status(500).json({error : error.message});
    }
});


export default Router;