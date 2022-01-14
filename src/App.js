import logo from './logo.svg';
//import './App.css';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import HomeMaintenace from './Components/Home_Maintain/HomeMaintain';
import React from 'react';
import { BrowserRouter as Route ,Router,Routes} from 'react-router-dom'
import Home from './Components/Home_Maintain/HomeMaintain'
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/Contact';
import Faq from './Components/Faq';
import JoiinUs from './Components/joinUs';
import Services from './Components/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Router>
        <TopNavbar></TopNavbar>
        <Routes>
      <Route  exact path='/' element={<Home/>} />
      <Route path= "/aboutus" element={<AboutUs></AboutUs>}  />
      <Route path='/joinus' element={<JoiinUs/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/faq' element={<Faq/>} />
      <Route path='/contact' element={<ContactUs/>} />
      </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
