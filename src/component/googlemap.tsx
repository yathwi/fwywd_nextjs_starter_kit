import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

const MapContainer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const markerLabel: google.maps.MarkerLabel = {
    text: 'PROJECT JAPAN',
    fontFamily: 'sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
  };
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mapStyles = {
    height: windowWidth < 640 ? '50vh' : '100vh',
    width: '100%',
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
