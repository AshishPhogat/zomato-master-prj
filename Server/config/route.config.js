import JwtPassport from "passport-jwt";

//database Model 
import { UserModel } from "../database/user";

const JWTStrategy  = JwtPassport.Strategy;
const ExtractJwt =  JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "ZOMATOAPP",
};

export default (passport) =>{
    passport.UserModel(new JWTStrategy(options, async (jwt__payload,done)=>{
        try{
            const doesUserExits =  UserModel.findById(jwt__payload.user);
            if(!doesUserExits) return done(null,false);

            return done(null,user);
        }catch(error){
            throw new Error (error);
        }
    }));
};