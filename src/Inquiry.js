import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Inquiry() {
  return (
    <div style={{ backgroundColor: '#e2eaf6', color: 'black', height: '750px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', position: 'relative' }}>
      <h1 style={{ fontSize: '50px', textAlign: 'left', paddingLeft: '150px', paddingTop: '150px', fontWeight: 'bold' }}>Let's Start,</h1>
      <h1 style={{ fontSize: '50px', textAlign: 'left', paddingLeft: '150px', fontWeight: 'bold' }}>Something Great!</h1>
      <p style={{ fontSize: '12px', textAlign: 'left', paddingLeft: '150px' }}>
        Proactively customize cross-media schemas rather than high-payoff
      </p>
      <p style={{ fontSize: '12px', textAlign: 'left', paddingLeft: '150px' }}>
        the customer service. Uniquely enable extensible niche.
      </p>

      <p style={{ fontSize: '12px', textAlign: 'left', paddingLeft: '230px', fontWeight: 'bold', paddingTop: '40px' }}>
        <i className="bi bi-map mr-1"></i>Akshya Nagar 1st Block 1st Cross,
      </p>
      <p style={{ fontSize: '12px', textAlign: 'left', paddingLeft: '242px', fontWeight: 'bold', paddingTop: '5px' }}>
        Rammurthy Nagar,
      </p>
      <p style={{ fontSize: '12px', textAlign: 'left', paddingLeft: '242px', fontWeight: 'bold', paddingTop: '5px' }}>
        Bangalore-560016
      </p>

      <p style={{ fontSize: '12px', textAlign: 'left', paddingLeft: '230px', fontWeight: 'bold', display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
        <i className="bi bi-phone mr-1"></i>
        +91 12345 67890
      </p>

      <p style={{ fontSize: '12px', textAlign: 'left', paddingLeft: '230px', fontWeight: 'bold', display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
        <i className="bi bi-envelope mr-1"></i>
        info@company.com
      </p>

      {/* Input Fields and Button */}
      <div style={{ position: 'absolute', top: '50%', right: '135px', transform: 'translateY(-50%)', padding: '20px', backgroundColor: '#1a73e8', width: '400px', borderRadius: '8px' }}>
        <h3 style={{ color: 'white', fontSize: '40px' }}>Need Help?</h3>
        <h6 style={{ color: 'white', fontSize: '10px', marginBottom: '10px',textAlign:'left'}}>
          Proactively fashion world-class leadership vis-a-vis enterprise e-services
          Great strong leadership.
        </h6>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px' }}>Name:</label>
          <input type="text" style={{ width: '100%', padding: '8px', marginBottom: '10px' }} placeholder='Name' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px' }}>Contact:</label>
          <input type="text" style={{ width: '100%', padding: '8px', marginBottom: '10px' }} placeholder='Contact' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px' }}>Email:</label>
          <input type="text" style={{ width: '100%', padding: '8px', marginBottom: '10px' }} placeholder='Email' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px' }}>Your Message:</label>
          <textarea style={{ width: '100%', minHeight: '80px', padding: '8px', marginBottom: '10px' }}></textarea>
        </div>
        <button style={{ backgroundColor: 'white', color: 'black', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer',fontWeight:'bold' }}>Send Inquiry</button>
      </div>
    </div>
  );
}
