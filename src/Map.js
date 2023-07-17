import React,{useEffect} from 'react'
import './css/Map.css'
import { MapContainer as LeafletMap,useMap, TileLayer,Marker, Popup } from "react-leaflet";
import { showDataOnMap } from "./util";

function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function Map({countries,casesType,center,zoom}) {

  return (
    <div className="map">
      <LeafletMap>
        <ChangeMap center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries,casesType)}
      </LeafletMap>
    </div>
  )
}
