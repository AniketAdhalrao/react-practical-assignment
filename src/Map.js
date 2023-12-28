import React from 'react';
import map from './map.png';

function Map() {
  return (
    <div
      style={{
        backgroundImage: `url(${map})`,
        backgroundSize: 'cover',  // Adjust the backgroundSize property
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '350px',
      }}
    >
    </div>
  );
}

export default Map;


