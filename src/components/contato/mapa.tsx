"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});
export default function MapSection() {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden">
      <MapContainer
        center={[-12.383, 16.933]}
        zoom={6}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        
        <Marker position={[-12.383, 16.933]}>
          <Popup>
            <strong>Sede Principal</strong><br />
            Kuito - Bié<br />
            Rua Diogo Cão
          </Popup>
        </Marker>

        
        <Marker position={[-12.776, 15.739]}>
          <Popup>
            <strong>Filial Huambo</strong><br />
            Avenida 5 de Outubro
          </Popup>
        </Marker>

        
        <Marker position={[-8.839, 13.289]}>
          <Popup>
            <strong>Filial Luanda</strong><br />
            Rua 1º Congresso do MPLA
          </Popup>
        </Marker>

        
        <Marker position={[-12.4, 16.95]}>
          <Popup>
            <strong>SAFRI-METAL</strong><br />
            Estrada Nacional N250
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
}