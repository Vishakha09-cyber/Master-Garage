import TopNavbar from './Components/TopNavbar/TopNavbar';
import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Home from './Components/Home'
import HomeMaintain from './Components/Home_Maintain/HomeMaintain';
import HomeMain1 from './Components/Home_Maintain/HomeMain1';
import Periodic from './Components/PeriodicServices/PeriodicService';
import PeriodicADDvechicle from './Components/PeriodicServices/PeriodicADDvechicle';
import PeriodicServiceAdded from './Components/PeriodicServices/PeriodicServicesAdded';
import Tacking from './Components/AboutUs';
import ContactUs from './Components/Contact';
import Faq from './Components/Faq';
import JoiinUs from './Components/joinUs';
import Services from './Components/Service';
import Booking1 from './Components/Booking/Booking1';
import ConfirmBooking from './Components/Booking/ConfirmBooking';
import Vehicaldelivery from './Components/Booking/Vehicaldelivery'
import Login from './Components/Login';
import Profile from './Components/Profile';
import ProfileDashboard from './Components/ProfileDasboard/ProfileDashboard'
import MyGarage from './Components/ProfileDasboard/MyGarage';
import MyOrder from './Components/ProfileDasboard/MyOrder';
import Chats from './Components/ProfileDasboard/Chats';
import Favourites from './Components/ProfileDasboard/Favourites';
import MgCoin from './Components/ProfileDasboard/MgCoin';
import HelpsSupport from './Components/ProfileDasboard/HelpsSupport';
import Refer from './Components/ProfileDasboard/Refer';
import modifyreview from './Components/Booking/ModifyReview';
import Payment from './Components/Booking/PaymentDetails';
import Thanking from './Components/Booking/Thanking';
import Chat from './Components/Booking/Chat';
//import JobCar from './Components/JobCard/JobCar';
import Jobcardprogress from './Components/JobCard/Jobcardprogress';
import Nextcarprogress from './Components/JobCard/Nextcarprogress';
import Accountscan from './Components/JobCard/Accountscan';
import Routes1 from './Components/dashborad/Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Components/dashborad/Routes';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
         <BrowserRouter>
         <TopNavbar></TopNavbar>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/HomeMaintain' component={HomeMaintain}/>
      <Route path='/HomeMain1' component={HomeMain1}/>
      <Route path= "/Tracking" component={Tacking}  />
      <Route path='/joinus' component={JoiinUs} />
      <Route path='/services' component={Services} />
      <Route path='/faq' component={Faq} />
      <Route path='/contact' component={ContactUs} />
      <Route path='/booking1' component={Booking1}/>
      <Route path='/confirmbook' component={ConfirmBooking}/>
      <Route path='/modifyreview' component={modifyreview}/> 
       <Route path="/Vehicaldelivery" component={Vehicaldelivery}/>
       <Route path="/login" component={Login}/>
       <Route path="/profile" component={Profile}/>
       <Route path="/profileDashboard" component={ProfileDashboard}/>
        <Route path="/MyGarage" component={MyGarage}/>
         <Route path="/MyOrder" component={MyOrder}/>
          <Route path="/Chats" component={Chats}/>
           <Route path="/Favourites" component={Favourites}/>
            <Route path="/MgCoin" component={MgCoin}/>
             <Route path="/HelpsSupport" component={HelpsSupport}/>
             <Route path="/Refer" component={Refer}/>
             <Route path="/payment" component={Payment}/>
             <Route path="/thanking" component={Thanking}/>
              <Route path="/Chat" component={Chat}/>
              {/* <Route path="/Jobcar" component={JobCar}/> */}
              <Route path="/jobprogress" component={Jobcardprogress}/>
              <Route path="/Nextcarprogress" component={Nextcarprogress}/>
              <Route path="/Accountscan" component={Accountscan}/>
              <Route path="/Routes" component={Routes1}/>
              <Route path="/PeriodicService" component={Periodic}/>
              <Route path="/PeriodicADDvechicle" component={PeriodicADDvechicle}/>
              <Route path="/PeriodicServiceAdded" component={PeriodicServiceAdded}/>
    </Switch>
  </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
