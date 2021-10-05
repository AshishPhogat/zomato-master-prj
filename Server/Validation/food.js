import joi from "joi";

export const validateRestaurantId = (resId)=>{
    const schema = joi.Object({
       _id : joi.string().required(),
    });

    return schema.validateAsync(resId);
}

export const validateCategory = (category)=>{
    const schema = joi.Object({
       category : joi.string().required(),
    });

    return schema.validateAsync(category);
}