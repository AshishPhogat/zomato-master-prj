import mongoose from "mongoose";


// export default async ()=>{
//     return mongoose.connect(process.env.MONGO_URL,{
//         useNewUrlParser : true,
//         useUnifiedTopology : true,
//         useCreateIndex : true,
//         useFindAndModify :false,
//     });
// };

export default async() =>{
    return mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connection made successful!!😎"));
};