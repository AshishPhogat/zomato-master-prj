import React,{useState,useEffect} from "react";
import { useParams ,Link} from "react-router-dom";
import {FiShoppingBag} from "react-icons/fi";
import {BiDrink} from "react-icons/bi";
import {IoFastFoodOutline} from "react-icons/io5";


const MobileTab = ()=>{
    const [allTypes, setAllTypes ] = useState([{
        id:"delivery",
        icon:<FiShoppingBag />,
        name :"Delivery",
        isActive : false,
    },{
        id:"diningOut",
        icon:<IoFastFoodOutline />,
        name :"Dining Out",
        isActive : false,
    },{
        id:"nightLife",
        icon:<BiDrink />,
        name :"Nightlife",
        isActive : false,
    },
]);
    const {type } = useParams();

    useEffect(()=>{
        if(type){
            const updateTypes = allTypes.map((item)=>{
                item.isActive = false;
                if(item.id === type){
                    return {...item,isActive:true};
                }
                return item;
            });
            setAllTypes(updateTypes);
        }

    },[type]);
    
    return<> 
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
            {
                allTypes.map((item)=>{
                    return (
                        <>  
                            <Link to={item.id} >
                                <div className={item.isActive ?"flex flex-col relative items-center text-xl text-zomato-400  " : "flex flex-col items-center text-xl"}>
                                    {item.icon}
                                <div className={item.isActive && "absolute w-full -top-2 border-t-2 border-zomato-400 "}></div >
                                <h5 text-bold text-sm>{item.name}</h5>
                                </div> 
                            </Link>
                        </>
                    );
                })
            }
            
        </div>
    </>
}

const LargetTab = ()=>{

    const [allTypes, setAllTypes ] = useState([{
        id:"delivery",
        name :"Delivery",
        isActive : false,
        activeColor:"yellow",
        activeImg:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
        inactiveImg:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },{
        id:"diningOut",
        name :"Dining Out",
        isActive : false,
        activeColor:"blue",
        activeImg:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        inactiveImg:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },{
        id:"nightLife",
        name :"Nightlife",
        isActive : false,
        activeColor:"purple",
        activeImg:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        inactiveImg:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    },
]); 

    const {type } = useParams();

    useEffect(()=>{
        if(type){
            const updateTypes = allTypes.map((item)=>{
                item.isActive = false;
                if(type === item.id){
                    return {...item,isActive : true};
                }
                return item;
            });
    
            setAllTypes(updateTypes);
        }
    },[type]);

    return<>
        <div className=" hidden  lg:flex gap-14 container px-20 mx-auto">
                
                
                {
                    allTypes.map((item)=>{
                        return (
                            <>
                               <Link to={item.id}>
                                    <div className={`flex items-center gap-3 ${item.isActive && "border-b-2 border-zomato-300 w-full ease-in duration-100"}`}>
                                    <div className={`w-16 h-16 p-4 ${item.isActive ? "relative" : ""} bg-${item.isActive ? item.activeColor : "gray"}-100 rounded-full`}>
                                        <img className="w-full h-full " src={item.isActive?`${item.activeImg}`:`${item.inactiveImg}`} alt="delivery" />
                                    </div>
                                    <h3 className={`text-xl text-${item.isActive ?"zomato" :"gray"}-400 font-normal`}>{item.name}</h3>
                                    </div>
                               </Link>
                            </>
                        );
                    })
                }
                            
        </div>    
    </>

}


const FoodTab = ()=>{
    return <>
        <div>
            <MobileTab />
            <LargetTab />
        </div>
    </>
}

export default FoodTab;