import logo from './logo.svg';
//import './App.css';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import HomeMaintenace from './Components/Home_Maintain/HomeMaintain';
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Home from './Components/Home'
import Tacking from './Components/AboutUs';
=======
import { BrowserRouter as Route ,Router,Routes} from 'react-router-dom'
import Home from './Components/Home_Maintain/HomeMaintain'
import AboutUs from './Components/AboutUs';
>>>>>>> 283bfd05ba948b7443eb2b8ac7e3d6c0fa411acb
import ContactUs from './Components/Contact';
import Faq from './Components/Faq';
import JoiinUs from './Components/joinUs';
import Services from './Components/Service';
import Booking1 from './Components/Booking/Booking1';
import ConfirmBooking from './Components/Booking/ConfirmBooking';
import Vehicaldelivery from './Components/Booking/Vehicaldeliver';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
     
         <BrowserRouter>
         <TopNavbar></TopNavbar>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path= "/aboutus" component={Tacking}  />
      <Route path='/joinus' component={JoiinUs} />
      <Route path='/services' component={Services} />
      <Route path='/faq' component={Faq} />
      <Route path='/contact' component={ContactUs} />
      <Route path='/booking1' component={Booking1}/>
      <Route path='/confirmbook' component={ConfirmBooking}/>
      <Route path='/vehicalconfirm' component={Vehicaldelivery}/>
    </Switch>
  </BrowserRouter>
=======
      
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
>>>>>>> 283bfd05ba948b7443eb2b8ac7e3d6c0fa411acb
      </header>
    </div>
  );
}

export default App;
