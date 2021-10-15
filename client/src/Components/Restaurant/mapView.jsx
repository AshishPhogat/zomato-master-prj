import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {FaRegCopy ,FaDirections} from "react-icons/fa";


// [13.214621251782804, 77.73287444245135]
const MapView = (props)=>{
    return <> 
            <h4 className="text-xl font-normal">Call</h4> 
                        <div className=" flex flex-col gap-1">
                            {
                                props.phoneNumber.map((number)=>{
                                    return <h5 className="text-zomato-200 font-base">{number}</h5>
                                })
                            }
                            
                        </div>

                        <h4 className="text-xl font-normal">Directions</h4> 
                        <div className="w-full h-48">
                        <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={props.mapLocation}>
                                    <Popup>
                                    {props.title}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <p>
                        {props.address}  
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="flex py-1 px-2 rounded-md bg-white  border border-gray-300 items-center gap-2">
                            <FaRegCopy className="text-gray-400 " />  <span className="text-extralight">Copy</span>
                            </button>

                            <button className="flex py-1 px-2 rounded-md bg-white  border border-gray-300 items-center gap-2">
                            <FaDirections className="text-zomato-400" /> <span className="text-extralight">Direction</span>
                            </button>
                        </div>

    </>
}

export default MapView;