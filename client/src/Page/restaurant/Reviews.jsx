import React,{useState} from "react";
import ReactStarts from "react-rating-stars-component";

//component
import ReviewCard from "../../Components/Restaurant/Reviews/reviewCard";
import AddReviewCard from "../../Components/Restaurant/Reviews/AddReviewCard";


const Reviews = ()=>{

    const [reviews,setReviews] = useState(["",""]);
    const handleRating = (value)=> console.log(value);

    return <> 

        <div className="w-full flex px-4 flex-col md:flex-row relative">

        <div className="w-full md:w-8/12 flex flex-col gap-3">
            <div className="md:hidden">
                <AddReviewCard />
            </div>
                {
                    reviews.map((review)=>{
                        return <ReviewCard {...review} />
                    })
                }
        </div>

        <aside className="hidden w-full ml-3 md:w-4/12 md:h-1/4 md:flex flex-col  md:sticky top-68 my-4 gap-1 p-3 rounded-lg z-10 bg-white-200rounded-lg" style={{"box-shadow": "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
            <AddReviewCard />

        </aside>
        </div>
    
    </>
}

export default Reviews ;