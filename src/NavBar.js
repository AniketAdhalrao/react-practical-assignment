import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import A_logo from './A_logo.jpg';
import Contact from './Contact';

export default function NavBar() {
  return (
    <div style={{ backgroundColor: '#e2eaf6', color: '#fff', height: '80px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <img
          src={A_logo}
          style={{ width: '50px', height: '50px', marginLeft: '50px' }}
          alt="Logo"
        />
      </div>
      <div>
        <Link to="/" style={{ marginRight: '10px', fontWeight: 'bold',color:'black', textDecoration: 'none'  }}>HOME</Link>
        <Link to="/" style={{ marginRight: '10px', fontWeight: 'bold',color:'black', textDecoration: 'none'  }}>ABOUT US</Link>
        <Link to="/" style={{ marginRight: '10px', fontWeight: 'bold',color:'black', textDecoration: 'none'   }}>SERVICES</Link>
        <Link to="/" style={{ marginRight: '10px', fontWeight: 'bold',color:'black', textDecoration: 'none'  }}>TESTIMONIALS</Link>
        <Link to="/" style={{ marginRight: '10px', fontWeight: 'bold',color:'black', textDecoration: 'none'   }}>BLOGS</Link>
        <Link to="/contact" style={{ fontWeight: 'bold',color:'black', textDecoration: 'none'  }}>CONTACT</Link>
      </div>
      <Routes>
        <Route path='/contact' element={Contact}></Route>
      </Routes>    
      </div>
  );
}
