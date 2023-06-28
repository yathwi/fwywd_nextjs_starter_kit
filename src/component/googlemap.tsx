import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

const MapContainer = () => {
  // サーバーサイドではwindowがundefinedなので、初期値としてnullを使用する
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  useEffect(() => {
    // コンポーネントがマウントされたときにウィンドウの幅を設定
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const markerLabel: google.maps.MarkerLabel = {
    text: 'PROJECT JAPAN',
    fontFamily: 'sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
  };

  const mapStyles = {
    // windowWidthがnullでない場合のみ条件演算子を評価
    height: windowWidth && windowWidth < 640 ? '50vh' : '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 35.17213289599193, // 会社の緯度
    lng: 136.90949856995942, // 会社の経度
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyDECFb7CKhkTxCU8ZXHYZCZj1mp_Dw8_sg'>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker position={defaultCenter} label={markerLabel} />
      </GoogleMap>
    </LoadScript>
  );
};

// eslint-disable-next-line import/no-default-export
export default MapContainer;
