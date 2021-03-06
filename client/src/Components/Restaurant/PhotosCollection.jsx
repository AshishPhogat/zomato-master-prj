import React  from "react";

const PhotoCollection = (props)=>{


    return <>


        <div className="w-32 h-32 flex flex-col md:w-48 md:h-48" onClick={props.openViewer}>
            <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={props.image[0]} alt="menu" className="w-full rounded-lg h-full transform transition duration-400  hover:scale-110" />
            </div>
        </div>
    </>
}

export default PhotoCollection ;