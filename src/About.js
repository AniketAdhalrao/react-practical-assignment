import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';

function About() {
  return (
    <div style={{ position: 'relative', backgroundColor: '#17478d', color: '#fff', height: '250px', padding: '8px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>
      <h1 style={{ fontSize: '15px', textAlign: 'left', paddingLeft: '30px', paddingTop: '50px' }}>Please follow us:</h1>
      <div style={{ display: 'flex', gap: '10px', textAlign: 'left', paddingLeft: '30px', paddingTop: '20px' }}>
        <FaLinkedin size={20} />
        <FaTwitter size={20} />
        <FaInstagram size={20} />
        <FaGlobe size={20} />
      </div>
      <p style={{ marginTop: '10px', textAlign: 'left', paddingLeft: '30px' }}>
        <FaGlobe size={20} style={{ marginRight: '5px' }} />
        <a href="http://company.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          http://company.com
        </a>
      </p>

      <div style={{ fontSize: '15px', position: 'absolute', top: '0', right: '950px', textAlign: 'left', paddingTop: '50px' }}>
        <h2 style={{ fontSize: '20px' }}>Our Services:</h2>
        <ul style={{ listStyleType: 'none', fontSize: '13px', padding: 0, margin: 0 }}>
            <li>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                {'>>'}  Lorem ipsum dolor
            </a>
            </li>
            <li>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                {'>>'}  Lorem ipsum dolor
            </a>
            </li>
            <li>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                {'>>'}  Lorem ipsum dolor
            </a>
            </li>
            <li>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                {'>>'}  Lorem ipsum dolor
            </a>
            </li>
        </ul>
      </div>


      <div style={{ fontSize: '15px', position: 'absolute', top: '0', right: '550px', textAlign: 'left', paddingTop: '80px' }}>
        <ul style={{ listStyleType: 'none', fontSize: '13px', padding: 0, margin: 0 }}>
            <li>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                {'>>'}  Lorem ipsum dolor
            </a>
            </li>
            <li>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                {'>>'}  Lorem ipsum dolor
            </a>
            </li>
            <li>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                {'>>'}  Lorem ipsum dolor
            </a>
            </li>
            <li>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                {'>>'}  Lorem ipsum dolor
            </a>
            </li>
        </ul>
   
    </div>
    <div style={{ fontSize: '15px', position: 'absolute', top: '0', right: '250px', textAlign: 'left', paddingTop: '40px' }}>
        <h2 style={{ fontSize: '20px' }}>GET IN TOUCH:</h2>
        <i className="bi bi-map mr-1" style={{ paddingTop: '30px'}}></i>
        <div style={{ fontSize: '12px',position: 'relative',  left: '30px',top:'-20px'}}>   
          <div>Akshya Nagar 1st Block 1st Cross,</div>
          <div>Rammurthy Nagar,</div>
          <div>Bangalore-560016</div>
        </div>
        <hr/>
        <i className="bi bi-phone mr-1" style={{ paddingTop: '20px'}}></i>
        <br/>
        <div style={{ fontSize: '12px',position: 'relative',  left: '30px',top:'-25px'}}>Phone : +91 12345 67890</div>
        <i className="bi bi-envelope mr-1" style={{ paddingTop: '20px'}}></i>
        <div style={{ fontSize: '12px',position: 'relative',  left: '30px',top:'-25px'}}>Email : info@company.com</div>
      </div>
    </div>
  );
}

export default About;
