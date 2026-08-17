import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const MapContainer = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 35.17213289599193, // 会社の緯度
    lng: 136.90949856995942, // 会社の経度
  };

  // 赤いピンのアイコンURL
  const iconUrl = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

  return (
    <LoadScript googleMapsApiKey='AIzaSyDECFb7CKhkTxCU8ZXHYZCZj1mp_Dw8_sg'>
      <GoogleMap mapContainerStyle={mapStyles} zoom={16} center={defaultCenter}>
        <Marker position={defaultCenter} icon={iconUrl} />
      </GoogleMap>
    </LoadScript>
  );
};

// eslint-disable-next-line import/no-default-export
export default MapContainer;
