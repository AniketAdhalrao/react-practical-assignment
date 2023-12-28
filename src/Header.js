import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons styles

const Header = () => {
  return (
    <div style={{ backgroundColor: '#133a75', color: '#fff', padding: '8px',fontFamily: 'Montserrat, sans-serif',fontSize:"12px" }}>
      <div className="d-flex justify-content-end align-items-center">
        <div className="d-flex align-items-center" style={{margin:"10px"}}>
          <i className="bi bi-phone mr-1"></i>
          <p className="phone mb-0 text-sm mb-1 mr-5" >+91 12345 67890  </p>
        </div>
        <div className="d-flex align-items-center" style={{margin:"10px"}}>
          <i className="bi bi-envelope mr-1"></i>
          <p className="email mb-0 text-sm ml-3">info@company.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
