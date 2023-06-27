import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import React from 'react';

const MapContainer = () => {
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  const markerLabel: google.maps.MarkerLabel = {
    text: 'PROJECT JAPAN',
    fontFamily: 'sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
  };

  const defaultCenter = {
    lat: 35.17213289599193, // 会社の緯度
    lng: 136.90949856995942, // 会社の経度
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyDECFb7CKhkTxCU8ZXHYZCZj1mp_Dw8_sg'>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <MarkerF position={defaultCenter} label={markerLabel} />
      </GoogleMap>
    </LoadScript>
  );
};

// eslint-disable-next-line import/no-default-export
export default MapContainer;
