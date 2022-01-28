import React from 'react';
import './topnavbar.css'
import {Container,Form,Button,Input,FormGroup,Label,Col,Row} from 'reactstrap';
import avatar from "../../Images/avatar.png";
import logo from "../../Images/garagelogo.PNG"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const TopNavbar=()=> {
  return (
    <div className="App">
      <div className="header">
        <div className="navbar">
           <div className="">
              <Link to="/location" className="logo"><img src={logo} alt="error" />
               <h5>Master Garage</h5></Link>
           </div>
           <div className="menu">
            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/joinus">Join us</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">FAQ's</Link>
          </li>
          <li>
          <Link to="#" className="icons1"><i class="fas fa-search-plus"></i></Link>
          </li>
          <li>
            <Link to="#" className="icons1"><i class="fas fa-bell"></i></Link>
          </li>
          <li>
            <Link to="/login" className="icons12"><img src={avatar} style={{width:"30px"}} alt="error"/><i class="fas fa-chevron-down"></i></Link>
          </li>
        </ul> 
           </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
