import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function LeafLetMap() {
  return (
    <div className="h-96 w-100 container mx-auto mt-20 mb-12 small:w-96 mobile:w-80 ">
      <MapContainer
        center={[36.19125374221944, 44.00914381197795]}
        zoom={10}
        style={{ height: "100%", width: "auto" }}
      >
        <TileLayer
          //  attribution=' <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[36.19125374221944, 44.00914381197795]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafLetMap;
