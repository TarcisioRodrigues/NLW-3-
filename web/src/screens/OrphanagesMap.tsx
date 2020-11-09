import React from  'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import Leaflet from 'leaflet'; 
import '../styles/page/orphanage-map.css';
import mapMarkerImg from '../assets/map-marker.svg';
const mapIcon=Leaflet.icon({
  iconUrl:mapMarkerImg,
  iconSize:[58,68], 
  iconAnchor:[29,68 ],
  popupAnchor:[170,2]

})
function OrphanagesMap(){
  return(
    <div className="" id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita:)</p>
        </header>
        <footer>
            <strong>Maranhão</strong>
            <span>Barra do Corda</span>
          </footer>
      </aside>
      <Map
       center={[-5.50531,-45.2337306]}
       zoom={15}
       style={{width:'100%', height:'100%'}}
     >
       <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
       <Marker 
        icon={mapIcon}
       position={[-5.50531,-45.2337306]}
       >
         <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>

         </Popup>
       </Marker>
        

       

    
       </Map >
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>

  )
}

export default OrphanagesMap;
