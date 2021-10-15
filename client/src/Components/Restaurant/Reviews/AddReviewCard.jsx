import React,{useState} from "react";
import ReactStarts from "react-rating-stars-component";

//component
import ReviewModal from "./ReviewModal";


const AddReviewCard = ()=>{

    const handleRating = (value)=> console.log(value)

    let [isOpen, setIsOpen] = useState(false);

    const openModal =()=> setIsOpen(true);

    
    return <> 
    <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}  />
    <h3 className="font-semibold text-lg">Rate Your Experience</h3>  
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                <label htmlFor="dining" >Dining</label>
                <input type="radio" id="dining" name="review" />
                </div>
                <div  className="flex items-center gap-2">
                <label htmlFor="delivery" >Delivery</label>
                <input type="radio" id="delivery" name="review" />
                </div>
                <ReactStarts count={5} onChange={handleRating}/>
            </div>
            

            <button  onClick={openModal} className="text-zomato-400 flex items-start">Write a review</button>
    </>
}

export default AddReviewCard ;