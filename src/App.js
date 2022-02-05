import TopNavbar from './Components/TopNavbar/TopNavbar';
import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Home from './Components/Home'
import HomeMaintain from './Components/Home_Maintain/HomeMaintain';
import HomeMain1 from './Components/Home_Maintain/HomeMain1';
import Periodic from './Components/PeriodicServices/PeriodicService';
import PeriodicADDvechicle from './Components/PeriodicServices/PeriodicADDvechicle';
import PeriodicServiceAdded from './Components/PeriodicServices/PeriodicServicesAdded';
import ServiceEstimates from './Components/PeriodicServices/ServiceEstimates';
import BasicShowmore from './Components/PeriodicServices/BasicShowmore';
import BookGarage from './Components/GarageBook/BookGarage';
import LoginBook from './Components/GarageBook/LoginGarage';
import Aboutus from './Components/AboutUs';
import Address from './Components/GarageBook/Adaddress';
import PayBook from './Components/GarageBook/PaymentGarage';
import PayNow from './Components/GarageBook/Paynow';
import ScheduleBook from './Components/GarageBook/ScheduleBook';
import HomeChallan from './Components/HomeChallan/HomeChallan';
import DueChallan from './Components/HomeChallan/DueChallan';
import DueChallan1 from './Components/HomeChallan/DueChallan1';
import HomeFasTag from './Components/HomeFastag/HomeFastag';
import BuyFastag from './Components/HomeFastag/BuyFastag';
import FastagSucessful from './Components/HomeFastag/FastagOrder';
import RechargeFasTag from './Components/HomeFastag/RechargeFastag';
import RechargeFastag1 from './Components/HomeFastag/RechargeFastag1';
import RechargeSucessful from './Components/HomeFastag/RechargeSucessful';
import ActFastag from './Components/HomeFastag/ActivateFastag';
import ActivateFastag1 from './Components/HomeFastag/ActivateFastag1';
import ActivateFastag2 from './Components/HomeFastag/ActivateFastag2';
import ChaufferHome from './Components/HomeChauffer/ChaufferHome';
import ChaufferBook from './Components/HomeChauffer/ChaufferBook';
import ChaufferBooked from './Components/HomeChauffer/ChaufferBooked';
import ChaufferAwait from './Components/HomeChauffer/ChaufferAwait';
import ChaufferDeclined from './Components/HomeChauffer/ChaufferDeclined';
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
import Favourites from './Components/Favourites/Favourites';
import MgCoin from './Components/ProfileDasboard/MgCoin';
import HelpsSupport from './Components/ProfileDasboard/HelpsSupport';
import Refer from './Components/ProfileDasboard/Refer';
import modifyreview from './Components/Booking/ModifyReview';
import Payment from './Components/Booking/PaymentDetails';
import Thanking from './Components/Booking/Thanking';
import Chat from './Components/Booking/Chat';
import Notification from './Components/Locaton/Notification';
import Search from './Components/Locaton/Search';
import Addvehical from './Components/Locaton/Addvihical';
import Addinstruction from './Components/Locaton/Addinstruction';
import Bookingid from './Components/QrPages/Bookingid';



//import JobCar from './Components/JobCard/JobCar';
import Jobcardprogress from './Components/JobCard/Jobcardprogress';
import Nextcarprogress from './Components/JobCard/Nextcarprogress';
import Accountscan from './Components/JobCard/Accountscan';
import Routes1 from './Components/dashborad/Routes';
import Location from './Components/Locaton/Location';
import Location1 from './Components/Locaton/Location1';
import AddChauffer from './Components/Chauffer/AddChauffer';
import Vehicalqr from './Components/QrPages/Vehicalqr';
import Mgcoinredeem from './Components/QrPages/Mgcoinredeem';
import Moreredeem from './Components/QrPages/Moreredeem';
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
      {/* <Route path= "/Chats" component={Aboutus}  /> */}
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
              <Route path="/location" component={Location}/>
              <Route path="/notification" component={Notification}/>
              <Route path="/location1" component={Location1}/>
              <Route path="/search" component={Search}/>
              <Route path="/addvehical" component={Addvehical}/>
              <Route path="/addinstruction" component={Addinstruction}/>
              <Route path="/addchauffer" component={AddChauffer}/>
              <Route path="/PeriodicService" component={Periodic}/>
              <Route path="/PeriodicADDvechicle" component={PeriodicADDvechicle}/>
              <Route path="/PeriodicServiceAdded" component={PeriodicServiceAdded}/>
              <Route path ="/BasicShowmore" component={BasicShowmore}/>
              <Route path="/ServiceEstimates" component={ServiceEstimates}/>
              <Route path="/BookGarage" component={BookGarage}/>
              <Route path="/LoginGarage" component={LoginBook}/>
              <Route path="/vehicalqr" component={Vehicalqr}/>
              <Route path="/Bookingid" component={Bookingid}/>
              <Route path="/Mgcoinredeem" component={Mgcoinredeem}/>
              <Route path="/Moreredeem" component={Moreredeem}/>
              <Route path="/Adaddress" component={Address}/>
              <Route path="/PaymentGarage" component={PayBook}/>
              <Route path="/Paynow" component={PayNow}/>
              <Route path="/ScheduleBook" component={ScheduleBook}/>
              <Route path="/HomeChallan" component={HomeChallan}/>
              <Route path="/DueChallan" component={DueChallan}/>
              <Route path="/DueChallan1" component={DueChallan1}/>
              <Route path="/HomeFasTag" component={HomeFasTag}/>
              <Route path="/BuyFastag" component={BuyFastag}/>
              <Route path="/FastagOrder" component={FastagSucessful}/>
              <Route path="/RechargeFastag" component={RechargeFasTag}/>
              <Route path="/RechargeFastag1" component={RechargeFastag1}/>
              <Route path="/RechargeSucessful" component={RechargeSucessful}/>
              <Route path="/ActivateFastag" component={ActFastag}/>
              <Route path="/ActivateFastag1" component={ActivateFastag1}/>
              <Route path="/ActivateFastag2" component={ActivateFastag2}/>
              <Route path="/ChaufferBook" component={ChaufferBook}/>
              <Route path="/ChaufferBooked" component={ChaufferBooked}/>
              <Route path="/ChaufferAwait" component={ChaufferAwait}/>
              <Route path="/ChaufferDeclined" component={ChaufferDeclined}/>
              <Route path="/ChaufferHome" component={ChaufferHome}/>



    </Switch>
  </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
