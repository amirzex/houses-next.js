'use client';

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const LocationMap = () => {
    const [selectedPosition, setSelectedPosition] = useState(null);

    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
            iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });
    }, []);


    const MoveMap = ({ position }) => {
        const map = useMap();

        useEffect(() => {
            if (position) {
                map.setView(position, 15, { animate: true });
            }
        }, [position, map]);

        return null;
    };


    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng;
        setSelectedPosition({ lat, lng });


        const formData = [
            {
                key: "HomeAddress",
                value: `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`,
                type: "text",
            },
        ];
        console.log("Selected location:", formData);

    };


    const handleMarkerDragEnd = (e) => {
        const { lat, lng } = e.target.getLatLng();
        setSelectedPosition({ lat, lng });

        const formData = [
            {
                key: "HomeAddress",
                value: `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`,
                type: "text",
            },
        ];
        console.log("Marker moved to:", formData);
    };

    return (
        <div className="flex flex-col justify-end h-full ">

            <div className="h-[30%] pt-5 pb-5 flex flex-row-reverse w-full gap-3 ">
                <input
                    type="text"
                    className="bg-gray-100 w-[80%] rounded-4xl text-right pr-2 outline-0"
                    placeholder="جستجو شهر" />
                <button className="bg-blue-900 text-white w-[20%] hover:scale-95 transition-all duration-200 rounded-4xl">جستجو</button>
            </div>

            <MapContainer
                center={[35.6892, 51.3890]}
                zoom={13}
                scrollWheelZoom={true}
                className="w-full h-[500px] sm:h-[250px] rounded-2xl shadow-sm"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MoveMap position={selectedPosition} />
                {selectedPosition && (
                    <Marker
                        position={selectedPosition}
                        draggable={true}
                        eventHandlers={{
                            dragend: handleMarkerDragEnd
                        }}
                    />
                )}
            </MapContainer>


            {selectedPosition && (
                <div className="mt-4 p-3 bg-gray-100 rounded-lg text-right">
                    <p className="text-sm font-medium">موقعیت انتخاب شده:</p>
                    <p className="text-xs text-gray-600">
                        عرض: {selectedPosition.lat.toFixed(6)} - طول: {selectedPosition.lng.toFixed(6)}
                    </p>
                </div>
            )}
        </div>
    );
};

export default LocationMap;