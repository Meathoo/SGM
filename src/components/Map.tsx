'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
function filterLocations() {
  return ;
  // var select = document.getElementById('locationSelect');
  // var value = select.value;
  // if (value === "1") {
  //     mapInstance.setView([25.0330, 121.5654], 13);
  // } else if (value === "2") {
  //     mapInstance.setView([25.0330, 121.5954], 13);
  // }
}
export function Map(){
    // useEffect(() => {
    //     // Ensure the leaflet CSS is applied
    //     // 
    //     import('leaflet/dist/leaflet.css');
    //   }, []);
    return (
        <MapContainer className='z-10' center={[25.0330, 121.5654]} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[25.0330, 121.5654]}>
            <Popup>
              藥櫃1 <br /> 地址.
            </Popup>
          </Marker>
          <Marker position={[25.0330, 121.5954]}>
            <Popup>
              藥櫃1 <br /> 地址.
            </Popup>
          </Marker>
        </MapContainer>
    );
}