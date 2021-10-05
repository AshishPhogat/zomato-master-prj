import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname : {type : String ,required : true},
    email : {type : String ,required : true},
    password : {type : String },
    address : [ {detail : {type : String } ,
                    for : {type : String }}],
    phoneNumber : {type : Number}
    },
    {
        timestamps: true ,   
    });


UserSchema.statics.findByemailandPhone = async({email,phoneNumber}) =>{
    
    //check whether email and phoneNumber exists
    const checkUserByemail= await UserModel.findOne({email});
    const checkByPhone = await UserModel.findOne({phoneNumber});

    if(checkUserByemail || checkByPhone){
        throw new Error("User already exists!");
    }
    return false;
}

UserSchema.statics.findByemailandPassword = async({email,password})=>{
        //check whether email exists
    const user= await UserModel.findOne({email});
    if(!user) throw new Error("User does not exists!!");

    //compare password
    const doesPasswordMatch = await bcrypt.compare(password,user.password);
    
    if(!doesPasswordMatch) throw new Error("invalid Password!");

    return user;

}

UserSchema.methods.generateJwtToken= function(){
    return jwt.sign({user : this._id.toString()},"ZOMATOAPP");
}

UserSchema.pre("save",function(next){
    const user = this;
    //password is modified
    if(!user.isModified("password")) return next();

    //generate bcrypt salt
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error);

        //hash the password
        bcrypt.hash(user.password,salt,(error,hash)=>{
            if(error) return next(error);
            //assighn the password to user
            user.password = hash;
            return next();
        })
    });
});

export const UserModel = mongoose.model("Users",UserSchema);



