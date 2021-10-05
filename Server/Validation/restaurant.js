import joi from "joi";

export const validataeRestaurantCity = (restaurantObj)=>{
    const schema = joi.Object({
        
        city : joi.string().required(),
        

    });

    return schema.validateAsync(restaurantObj);
}

export const validataeRestaurantSearchString = (restaurantObj)=>{
    const schema = joi.Object({
        searchString : joi.string().required(),
    });

    return schema.validateAsync(restaurantObj);
}