import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Contact from './Contact';
import { Link, Routes,Route } from 'react-router-dom';
import Inquiry from './Inquiry';
import Map from './Map';
import About from './About';
export default function App() {
  return (
    <div className="App">
    <Header/>
    <NavBar/>
    <Contact/>
    <Routes>
        <Route path='/contact' element={Contact}></Route>
    </Routes>
    <Inquiry/>
    <Map/>
    <About/>
    <Footer/>
  </div>
  );
}
