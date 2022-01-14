import logo from './logo.svg';
//import './App.css';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import HomeMaintenace from './Components/Home_Maintain/HomeMaintain';
import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
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
      <TopNavbar></TopNavbar>
         <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path= "/aboutus" component={AboutUs}  />
      <Route path='/joinus' component={JoiinUs} />
      <Route path='/services' component={Services} />
      <Route path='/faq' component={Faq} />
      <Route path='/contact' component={ContactUs} />
    </Switch>
  </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
