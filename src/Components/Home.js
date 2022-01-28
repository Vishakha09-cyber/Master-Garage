import React from 'react'
//import Navbar from '../features/home/Navabr';
import {Container,Form,Button,Input,FormGroup,Label,Col,Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import booking from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/home.png';
import background from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/background.png';
import setting from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/setting.png';
import Carwash from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/carwash.png';
import fastag from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/fastag.png';
import challan from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/challan.png';
import chauffers from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/chauffers.png';
import parking from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/parking.png';
import insurance from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/insurance.png';
import usecar from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/usecar.png';
import newev from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/newsev.png';
import activatepng from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/ActivateBG.png';
import AboutLogo from '../Images/aboutlogo.PNG'
import logo from "../Images/drawable-xxxhdpi/drawable-xxxhdpi/logo.png"
import Item from './Item';
import './styles.css'
const Home = () => {
    return (
        <div>
           
            <Container fluid>
            <Row className="head_container p-4">
                <Col lg={6} className="left_container">
                    <div className="left_items">
                        <h1 className="">Freedom 
                             of Choice</h1>
                        <h2 className="boldfent">One key to unlock 
                        all your car needs!</h2>
                        <p>Master Garage is your car buddy that assists you to make an informed
                    and helps you to enjoy your freedom to choose !</p>
                    </div>
                </Col>
                <Col lg={6} sm={12}>
                  <img src={background} alt="error" className="backgroundhome" width="600px"/>
                  <img src={booking} alt="error" className="bookingillus"/>
                </Col>
            </Row>
            <div className="p-3">
                <h3>Select a Category </h3>
                <div className="cardItem">
                <div className='item ml-3'>
                <Link to="/HomeMaintain">
                  <img src={setting} alt="error"/>
                 <p>Setting</p></Link>
           </div>
                    <div className='item'>
                    <img src={Carwash} alt="error"/>
                    <p>Car Wash</p>
                    </div>
                    <div  className='item'>
                    <img src={fastag} alt="error"/>
                    <p>Fastag</p>
                    </div>
                    <div className="item">
                    <img src={challan} alt="error"/>
                    <p>Challen</p>
                    </div>
                    <div className="item">
                    <Link to="/addchauffer"><img src={chauffers} alt="error"/>
                    <p>Chauffers</p></Link>
                    </div>
                    <div className="item">
                    <img src={parking} alt="error"/>
                    <p>Parking</p>
                    </div>
                    <div className="item">
                    <img src={insurance} alt="error"/>
                    <p>Insurance</p>
                    </div>
                    <div className="item">
                    <img src={usecar} alt="error"/>
                    <p>Use Car</p>
                    </div>
                    <div className="item">
                    <img src={newev} alt="error"/>
                    <p>New EV's</p>
                    </div>

                </div>
      
            </div>
            </Container>
            <Container fluid className="about">
               <Row>
                   <Col lg={10}>
                       <div className="aboutcont">
                   <h3>About Us</h3>
                       <p>
                       
                       Master Garage provides end to end solution for all your automobile needs and assists you to 
make an informed decision, from new vehicle purchase to getting your car serviced at the best 
garage nearby, manage all your fastags at one place, find chauffer's for your trips, renew your 
insurance, find a suitable parking and to buy and sell used car at the best price.
                       </p>
                       </div>
                   </Col>
                   <Col lg={2} className="icon">
                      <p><img src={logo} alt="error"/></p>
                       <Link className="knownmore">Known more<i class="fas fa-arrow-right"></i></Link>
                   </Col>
               </Row>
 

            </Container>
        </div>
    )
}

export default Home
