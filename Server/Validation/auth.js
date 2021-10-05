import joi from "joi";

export const validateSignup = (userData)=>{
    const schema = joi.Object({
        fullname: joi.string().required().min(5),
        email : joi.string.email().required,
        password: joi.string().min(5),
        address: joi.array().items(joi.Object({detail : joi.string() , for: joi.string() })),
        phoneNumber : joi.number,
    });

    return schema.validateAsync(userData);
}

export const validateSignin = (userData)=>{
    const schema = joi.Object({
        email : joi.string.email().required,
        password: joi.string().min(5),
    });

    return schema.validateAsync(userData);
}