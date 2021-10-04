import mongoose from "mongoose";

const RestaruantSchema = new mongoose.Schema({
    name : {type : String ,required : true },
    city  : {type : String ,required : true },
    address : {type : String ,required : true },
    mapLocation  : {type : String ,required : true },
    cuisine : [String],
    restaurantTimings : String,
    contactNumbe : Number ,
    websites : String ,
    popularDishes : [String],
    averageCost : Number,
    amenities : [String],
    menuImages :{
        type : mongoose.Types.ObjectId,
        ref : "Images",
    },
    menu :  {
        type : mongoose.Types.ObjectId,
        ref : "Menus",
    },
    reviews :[{type : mongoose.Types.ObjectId,ref : "Reviews"}],
    photos :{type :mongoose.Types.ObjectId,ref :"Images"},
    },
    {
        timestamps: true ,   
    });

export const RestaurantModel = mongoose.model("Restaurants",RestaruantSchema);