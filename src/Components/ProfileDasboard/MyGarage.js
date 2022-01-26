import React from 'react'
import {Container,Col,Row,Card,CardBody} from 'reactstrap';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import './dashboard.css'
import Mgcard from './Mggaragecard';
import alcazar from '../../Images/alcazar.jpeg';
import balano from '../../Images/balano.jpg';
import i10 from '../../Images/i10.jpeg';
import Recharge from './Recharge';
import fastag from '../../Images/Fastag-logo.png';
import Ongoing from './OngoingBooking';
import BookingHistory from './BookingHistory';



const MyGarage = () => {
    return (
        <Container>
        <div className="rounded shadow p-2">
           <div className="allvehicals">
             <h5>All Vehicles(3)</h5>
            <Link className="addmorevehical"><i class="fas fa-plus-circle"></i> <p>Add New Vehicle</p></Link>
           </div>
           <div className="allcarcard">
               <Row>
                   <Col lg={4}>
                 <Mgcard className="firstcarcardlink" images={alcazar} carName="Alcazar" model="MH 01 AB 3827" />
               </Col>
               <Col lg={4}>
                 <Mgcard images={balano} carName="Baleno" model="MH 01 AB 3827" />
               </Col>
               <Col lg={4}>
                 <Mgcard images={i10} carName="i10" model="MH 01 AB 3827" />
               </Col>
           </Row>
           <Row className="mt-3">
               <Col lg={3}>
                  <Card>
                  <div className="p-3 backrecharge">
         <div className="rechareghead">
             <div className="recharegval"><Link><img src={fastag} alt="error"/></Link></div>
             <p>Recharge</p>
         </div>
         <div className="recharegval1">
             <small>Balance</small>
             <p>₹459</p>
         </div>
         </div>
                  </Card>
               </Col>
               <Col lg={3}>
                  <Card>
                  <div className="p-3 backrecharge">
         <div className="rechareghead">
             <div className="recharegval"><Link><svg xmlns="http://www.w3.org/2000/svg" width="15.004" height="19.6" viewBox="0 0 15.004 19.6">
            <g id="Group_27142" data-name="Group 27142" transform="translate(0.25 0.3)">
                <path id="Path_29146" data-name="Path 29146" d="M0,0,2.172,2.011,4.277,0,6.683,2.011,8.848,0l2.226,1.771L13.339.248v17.22l-2.265-1.383L8.848,17.949,6.683,16.085,4.277,17.949l-2.1-1.865L.185,17.468Z" transform="translate(0.583 0.526)" fill="#f4f8ff"/>
                <path id="Path_29147" data-name="Path 29147" d="M97.984,92.491a.876.876,0,0,0-.953.145L95.8,93.73l-1.68-1.5a.889.889,0,0,0-1.186,0l-1.678,1.5-1.679-1.5a.889.889,0,0,0-1.186,0l-1.68,1.5L85.47,92.636A.883.883,0,0,0,84,93.3V109.7a.885.885,0,0,0,1.473.666l1.235-1.093,1.68,1.5a.889.889,0,0,0,1.186,0l1.679-1.5,1.679,1.5a.889.889,0,0,0,1.186,0l1.68-1.5,1.236,1.093A.884.884,0,0,0,98.5,109.7V93.3A.876.876,0,0,0,97.984,92.491Zm-1.6,16.113a.888.888,0,0,0-1.181,0l-1.68,1.5-1.678-1.5a.889.889,0,0,0-1.186,0l-1.679,1.5-1.681-1.5a.884.884,0,0,0-1.178,0L84.89,109.7v-2.372l0-14.022L86.119,94.4a.888.888,0,0,0,1.182,0l1.68-1.5,1.679,1.5a.888.888,0,0,0,1.186,0l1.679-1.5,1.681,1.5a.884.884,0,0,0,1.178,0L97.614,93.3v11.27l0,5.124Z" transform="translate(-84 -92)" fill="#2650d8" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="0.5"/>
                <path id="Path_29148" data-name="Path 29148" d="M103.084,125.912H94.168a.47.47,0,0,0,0,.941h8.916a.47.47,0,0,0,0-.941Z" transform="translate(-91.502 -116.876)" fill="#4ee59d"/>
                <path id="Path_29149" data-name="Path 29149" d="M99.781,115.914H94.253a.555.555,0,0,0,0,1.11h5.528a.555.555,0,1,0,0-1.11Z" transform="translate(-91.503 -109.663)" fill="#4ee59d"/>
                <path id="Path_29150" data-name="Path 29150" d="M103.754,135.91H94.2a.5.5,0,0,0,0,1.008h9.552a.5.5,0,0,0,0-1.008Z" transform="translate(-91.503 -123.577)" fill="#4ee59d"/>
            </g>
            </svg>
</Link></div>
             <p>Pay Now</p>
         </div>
         <div className="recharegval1">
             <small>Total</small>
             <p>8 Challans</p>
         </div>
         </div>
                  </Card>
               </Col>
               <Col lg={3}>
                  <Card>
                  <div className="p-3 backrecharge">
         <div className="rechareghead">
             <div className="recharegval"><Link><svg xmlns="http://www.w3.org/2000/svg" width="17.616" height="20.771" viewBox="0 0 17.616 20.771">
                <g id="Group_27162" data-name="Group 27162" transform="translate(0.5 0.5)">
                    <path id="Path_12817" data-name="Path 12817" d="M179.354,67.067l0-1.145-.429-.2a18.138,18.138,0,0,0-15.744,0l-.43.195-.006,2.2c0,3.58.154,7.3,2,10a18.1,18.1,0,0,0,5.958,5.315l.354.2.354-.2a18.1,18.1,0,0,0,5.957-5.315c1.843-2.7,2-6.415,2-9.994Z" transform="translate(-162.741 -63.93)" fill="#2650d8" stroke="rgba(0,0,0,0)" stroke-width="1"/>
                    <path id="Path_12818" data-name="Path 12818" d="M164.242,67.029c0,.234-.005,1.6-.005,1.6,0,3.2.133,6.528,1.729,8.861a16.185,16.185,0,0,0,5.28,4.708,16.176,16.176,0,0,0,5.281-4.708c1.595-2.333,1.728-5.657,1.728-8.863V67.65s0-.375,0-.621a16.111,16.111,0,0,0-14.008,0Z" transform="translate(-162.937 -63.962)" fill="#f4f8ff" stroke="rgba(0,0,0,0)" stroke-width="1"/>
                    <g id="Group_16589" data-name="Group 16589" transform="translate(4.352 5.215)">
                    <g id="Group_16588" data-name="Group 16588">
                        <path id="Path_12819" data-name="Path 12819" d="M177.787,74.926l-3.141,4c-.6-.625-1.247-1.3-1.247-1.3a1.035,1.035,0,0,0-1.492,1.435l2.068,2.162a1.031,1.031,0,0,0,1.557-.074l3.877-4.927a1.035,1.035,0,0,0-1.622-1.287Z" transform="translate(-171.62 -74.534)" fill="#4ee59d" stroke="rgba(0,0,0,0)" stroke-width="1"/>
                    </g>
                    </g>
                </g>
                </svg>
                
</Link><p>Insurance</p></div>
             <p>Insurance</p>
         </div>
         <div className="recharegval1">
             <small>Validity</small>
             <p>28,Feb 2018</p>
         </div>
         </div>
                  </Card>
               </Col>
               <Col lg={3}>
                  <Card>
                  <div className="p-3 backrecharge">
         <div className="rechareghead">
             <div className="recharegval"><Link>
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                <g id="Ellipse_2137" data-name="Ellipse 2137" fill="none" stroke="#2650d8" stroke-width="1">
                    <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
                    <circle cx="7.5" cy="7.5" r="7" fill="none"/>
                </g>
                </svg>
              
            </Link>  <p>PUCC</p></div>
         </div>
         <div className="recharegval1">
             <small>Balance</small>
             <p>₹459</p>
         </div>
         </div>
                  </Card>
               </Col>
           </Row>
           </div>
           <div>
     <BrowserRouter> 
        <Container>
            <div className="mgNavigation mt-3">
                <ul>
                    <li><Link className="items13" to="/">Ongoing Booking</Link></li>
                    <li><Link className="items13" to="/bookinghistory">Booking History</Link></li>
                </ul>
                </div>
            <Switch>
                <Route exact path="/"  component={Ongoing}/>
                <Route path="/bookinghistory" component={BookingHistory}/>
            </Switch>
            </Container>
        </BrowserRouter>
     </div>
        </div>   
        </Container>
    )
}

export default MyGarage
