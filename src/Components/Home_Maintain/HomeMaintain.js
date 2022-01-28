import React from 'react';
import './homemaintain.css';
import { Link } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
//import homeimg1 from '../../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';
import homeimg1 from '../../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';
function HomeMaintain(){
    return <>
        <div className='container-fluid px-5'>
            <Row className="row1">
                <Col sm={6} className='row1bg'>
                    <Row>
                        <p className="text1">Compare & Choose Schedule an appoitment Pay securely online</p>
                        <div>
                        <p className="text-3">Please enter your location to get information on garages near by</p>
                            <SearchBar></SearchBar>
                        </div>
                    </Row>
                </Col>
                <Col sm={6}><img src={homeimg1} style={{height:"385px",width:"623px",paddingLeft:'10px'}}></img></Col>
            </Row>
        </div>
        <Row className='p-0 m-0' >
                <div className='mt-5'  style={{backgroundColor: "#f4f8ff"}}>
                <Sectionto></Sectionto>
                </div>
               
            </Row>

    </>

}
export default HomeMaintain;

const SearchBar = () => (
    <form action="/" method="get" className='p-0'>
        <div>
        <input
            className='PinCodeInput'
            type="text"
            value="Enter Pin Code"
            name="Location" 
        />
        <i className='location'><svg xmlns="http://www.w3.org/2000/svg" width="24.916" height="29.473" viewBox="0 0 24.916 29.473">
  <path id="Path_26941" data-name="Path 26941" d="M128.21,47.313a12.466,12.466,0,0,0-17.63,17.63l7.741,7.757a1.477,1.477,0,0,0,.48.322,1.462,1.462,0,0,0,.564.113,1.468,1.468,0,0,0,1.044-.435l7.8-7.831a12.416,12.416,0,0,0,0-17.556Zm-2.1,15.455-6.713,6.743-6.715-6.743a9.491,9.491,0,1,1,13.429,0ZM114.988,51.618A6.337,6.337,0,1,0,125.8,56.172a6.218,6.218,0,0,0-1.851-4.481,6.315,6.315,0,0,0-8.961-.074Zm6.89,6.876a1.415,1.415,0,1,0-.074,0Z" transform="translate(-106.929 -43.662)" fill="#2650d8"/>
</svg>
</i>
        <button className='FindGarage' type="submit">Find Garages</button>

        </div>
        
    </form>
);

function Sectionto(){
    return<>
        <div >
            <Row className='iconrow'>
                <Col sm={3}>
                    <div className='rowbox flex-gap'>
                      <Link to="/HomeMain1" style={{textDecoration:'none'}}>
                      <div className='icon'><svg id="Group_29178" data-name="Group 29178" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#32ffeb"/>
      <stop offset="1" stop-color="#00bcaa"/>
    </linearGradient>
  </defs>
  <rect id="Rectangle_9407" data-name="Rectangle 9407" width="100" height="100" rx="26" fill="url(#linear-gradient)"/>
  <path id="Path_29961" data-name="Path 29961" d="M250.073,33.612a2.61,2.61,0,0,0-2.365,2.608v4.767a19.845,19.845,0,0,0-2.2,1.06l-3.791-3.789h0a2.612,2.612,0,0,0-3.832.2l-6.522,7.823h0a2.607,2.607,0,0,0,.164,3.5l2.609,2.608c-.3.627-.768,1.342-1.1,2.078h-3.587a2.608,2.608,0,0,0-2.609,2.608V67.514a2.608,2.608,0,0,0,2.609,2.608h3.587c.33.73.762,1.456,1.06,2.078l-2.568,2.567a2.608,2.608,0,0,0-.164,3.546l6.522,7.823a2.609,2.609,0,0,0,3.832.163l3.791-3.789a19.924,19.924,0,0,0,2.2,1.06v4.808h0a2.61,2.61,0,0,0,2.61,2.608h10.435a2.608,2.608,0,0,0,2.609-2.608V83.569a19.844,19.844,0,0,0,2.2-1.06l3.791,3.789h0a2.609,2.609,0,0,0,3.832-.163l6.522-7.823a2.608,2.608,0,0,0-.163-3.546L276.976,72.2c.3-.622.729-1.348,1.06-2.078h3.586a2.608,2.608,0,0,0,2.609-2.608V57.083a2.608,2.608,0,0,0-2.609-2.608h-3.587c-.333-.736-.8-1.451-1.1-2.078l2.609-2.608h0a2.608,2.608,0,0,0,.163-3.5l-6.522-7.823h0a2.612,2.612,0,0,0-3.832-.2l-3.791,3.789a19.922,19.922,0,0,0-2.2-1.06V36.22h0a2.609,2.609,0,0,0-2.609-2.608H250.318c-.082,0-.164,0-.245,0Zm2.853,5.215h5.217V42.74a2.608,2.608,0,0,0,2,2.527,17.44,17.44,0,0,1,4.483,2.282h0a2.608,2.608,0,0,0,3.179-.367l3.22-3.219,3.139,3.83-2.2,2.2a2.607,2.607,0,0,0-.285,3.382c.721,1.02.932,2.155,2.4,4.931A2.607,2.607,0,0,0,276.4,59.69h2.609v5.215H276.4a2.611,2.611,0,0,0-2.323,1.385c-1.473,2.776-1.684,3.91-2.4,4.931a2.608,2.608,0,0,0,.285,3.341L274.2,76.8l-3.179,3.789-3.22-3.219h0a2.61,2.61,0,0,0-3.179-.367,17.484,17.484,0,0,1-4.483,2.282h0a2.608,2.608,0,0,0-2,2.567v3.912h-5.217V81.857a2.609,2.609,0,0,0-2-2.567,17.44,17.44,0,0,1-4.483-2.282h0a2.61,2.61,0,0,0-3.179.367l-3.22,3.219-3.179-3.789,2.242-2.241h0a2.608,2.608,0,0,0,.286-3.341c-.721-1.02-.932-2.155-2.4-4.931a2.612,2.612,0,0,0-2.324-1.385h-2.609V59.69h2.609a2.609,2.609,0,0,0,2.324-1.385c1.473-2.776,1.684-3.91,2.4-4.931a2.608,2.608,0,0,0-.286-3.382l-2.2-2.2,3.139-3.83,3.22,3.219a2.608,2.608,0,0,0,3.179.367,17.484,17.484,0,0,1,4.483-2.282h0a2.61,2.61,0,0,0,2-2.527Zm10.354,14.3h0a2.609,2.609,0,0,0-1.957,1.019l-8.4,10.513-3.179-3.993h0a2.61,2.61,0,0,0-4.076,3.26l5.217,6.52a2.61,2.61,0,0,0,4.076,0L265.4,57.409h0a2.608,2.608,0,0,0-2.119-4.278Z" transform="translate(-205.535 -12.297)" fill="#fff" stroke="#16dac7" stroke-width="1"/>
</svg>
</div>
                        <div className='firsth1'>
                        <span className='head1'>One Stop Solution</span>
                        <p className='shortpara'>Compare, Choose & Book what fits your needs</p>
                    
                        </div>   
                      </Link>  
                    </div>
                </Col>
                <Col sm={3}> 
                <div className='rowbox flex-gap'>
                <div className='icon'><i class="fonticon far fa-smile-beam i2"></i></div>
                <div className='firsth1'>
                        <span  className='head1'>Peace of Mind</span>
                        <p className='shortpara' >Quality Service, Secure Payment and rooust customer support</p>
                        </div> 
                    </div></Col>
                <Col sm={3}>
                <div className='rowbox flex-gap'>
                <div className='icon'><i class="fonticon far fa-heart i3"></i></div>
                <div className='firsth1'>
                        <span  className='head1'>Freedom of Choice</span>
                        <p className='shortpara'>Compare, Choose & Book what fits your needs</p>
                        </div> 
                    </div>
                </Col>
                <Col sm={3}>
                <div className='rowbox flex-gap'>
                <div className='icon'><i class="fonticon fas fa-users i4"></i></div>
                <div className='firsth1'>
                        <span  className='head1'>Trusted Partners</span>
                        <p className='shortpara'>100% genuine and trusted service providers nearby</p>
                        </div> 
                    </div>
                </Col>
            </Row>
        </div>
    </>
}

