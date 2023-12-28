import React from 'react';
import image from './Background.webp';

export default function Contact() {
  return (
    <div style={{ backgroundImage: `url(${image})`, color: '#fff', height: '350px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h1 style={{ fontSize: '42px', marginLeft: '200px',marginTop:"40px", textAlign: 'left',fontWeight:"bold" }}>Contact Us</h1>
      <p style={{ fontSize: '18px',marginLeft: '200px',marginTop:"15px", lineHeight: '1.5' }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      </p>
      <p style={{ fontSize: '18px',marginLeft: '200px', lineHeight: '1.5' }}>
        sed diam nonummy nibh euismod tincidunt ut laoreet
      </p>
      <input type='button' value={'Home>>Contact US'} style={{ marginLeft: '200px',marginTop: '20px', color: 'black', fontWeight: 'bold' }} />
    </div>
  );
}

