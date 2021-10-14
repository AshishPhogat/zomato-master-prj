import React from "react";


//component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";


const RestaurantLayout = ()=>{
    const images=["https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",  
];
    return <> 
            <RestaurantNavbar />
        <div className="container mx-auto my-5 px-4 lg:px-20">
            <ImageGrid image={images} />   
        </div>
    </>
}

export default RestaurantLayout ;