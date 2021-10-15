import React ,{useState} from "react";
import ImgsViewer from "react-images-viewer" ;
import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props)=>{

    const [isMenuOpen , setIsMenuOpen]  = useState(false);
    const [CurrentImg , setCurrentImg]  = useState(0);
    const closeViewer = ()=>setIsMenuOpen(false);
    const openViewer = ()=>setIsMenuOpen(true);

    const prevImage = () =>setCurrentImg((prev)=>(prev-=1))
    const nextImage = () =>setCurrentImg((prev)=>(prev+=1))
    return <>



        {isMenuOpen && (
                <ImageViewer
                src={props.image}
                currentIndex={CurrentImg }
                disableScroll={ false }
                onClose={ closeViewer }
                />
            )}

        <div className="w-32 h-32 flex flex-col md:w-48 md:h-48" onClick={openViewer}>
            <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={props.image[0]} alt="menu" className="w-full rounded-lg h-full transform transition duration-400  hover:scale-110" />
            </div>
            <strong>{props.menuTitle}</strong>
            <p className="text-gray-400 font-light text-xs">{props.pages} pages</p>
        </div>
    </>
}

export default MenuCollection ;