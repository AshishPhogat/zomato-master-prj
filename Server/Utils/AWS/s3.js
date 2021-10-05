import AWS, { S3 } from "aws-sdk";


//AWS s3 bucket config
const s3bucket = new AWS.S3({

    accessKeyId : process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region:"ap-south-1",
});


export const s3Upload  = (optoins) =>{
    return new Promise((resolve,reject)=>{
        s3bucket.upload(optoins,(error,data)=>{
            if(error){
                return reject(error);
            }

            return resolve(data);
        });
    });
};
