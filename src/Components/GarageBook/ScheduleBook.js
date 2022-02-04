import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
import './Schedule.css';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import CartBox from './CartBox';


function ScheduleBook(){
  
    return <>
    <div className='container-fluid'>
        <Row>
                <div className='linkhead'>
                    <Link to ="/LoginGarage"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/LoginGarage">Confirm Booking</Link>
                </div>
            </Row>
            <Row> 
                <Col sm={8} ><SubMid></SubMid></Col>
                <Col sm={4}  ><CartBox></CartBox></Col>
                
            </Row>

    </div>
            
    </>
}
export default ScheduleBook;

const SearchBar = () => (
    <form action="/" method="get">
        <Link style={{textDecoration:'none'}} to="/Adaddress"><button className='submitphone'>Submit</button></Link>
    </form>
);

const SubMid = () =>(
    
    <>
           <Row className='px-2'>
           <div style={{display:'flex'}} className='mb-2'>
           <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" className='accounticon' viewBox="0 0 78 78">
  <defs>
    <filter id="Ellipse_2112" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_26337" data-name="Group 26337" transform="translate(9 6)">
    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Ellipse_2112)">
      <circle id="Ellipse_2112-2" data-name="Ellipse 2112" cx="30" cy="30" r="30" transform="translate(9 6)" fill="#2650d8"/>
    </g>
    <g id="Group_26335" data-name="Group 26335" transform="translate(17.358 15.777)">
      <path id="Path_28625" data-name="Path 28625" d="M27.95,19.481v-3.16A6.321,6.321,0,0,0,21.629,10H8.987a6.321,6.321,0,0,0-6.321,6.321v3.16" transform="translate(-2.667 8.963)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path id="Path_28626" data-name="Path 28626" d="M11.654,14.642A6.321,6.321,0,1,0,5.333,8.321,6.321,6.321,0,0,0,11.654,14.642Z" transform="translate(0.988 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    </g>
  </g>
</svg>
                        <Row className='px-5 py-4 accountbg'>
                        <Row>
                            <Col sm={10}>
                            <p className='bookinghead1'>Logged in</p>
                          <Link to="#" style={{textDecoration:'none'}}><p className='poppins22M'>Sachin Tiwari &nbsp; &nbsp; &nbsp; &nbsp; +91 8853299293</p></Link>
                          </Col>
                          <Col sm={2} style={{textAlign:'right'}}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
  <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>
</Col>
                
                        </Row>
                    </Row>  
           </div>
           <div style={{display:'flex'}} className='my-2'>
           <svg xmlns="http://www.w3.org/2000/svg" width="78" className='accounticon' height="78" viewBox="0 0 78 78">
  <defs>
    <filter id="Ellipse_2113" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_26338" data-name="Group 26338" transform="translate(9 6)">
    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Ellipse_2113)">
      <circle id="Ellipse_2113-2" data-name="Ellipse 2113" cx="30" cy="30" r="30" transform="translate(9 6)" fill="#2650d8"/>
    </g>
    <path id="Icon_material-timer" data-name="Icon material-timer" d="M22.7,1.5H13.6V4.431h9.1ZM16.635,20.549h3.034V11.757H16.635Zm12.18-9.686,2.154-2.081a16.487,16.487,0,0,0-2.139-2.066L26.677,8.8a13.894,13.894,0,0,0-8.525-2.9A13.427,13.427,0,0,0,4.5,19.084,13.417,13.417,0,0,0,18.152,32.271,13.417,13.417,0,0,0,31.8,19.084,12.858,12.858,0,0,0,28.815,10.863ZM18.152,29.341A10.435,10.435,0,0,1,7.534,19.084,10.435,10.435,0,0,1,18.152,8.827,10.435,10.435,0,0,1,28.77,19.084,10.435,10.435,0,0,1,18.152,29.341Z" transform="translate(11.848 13.113)" fill="#fff"/>
  </g>
</svg>

                        <Row className='px-5 py-3 accountbg'>
                        <Col sm={8}>
                        <p className='bookinghead1'>Service Schedule</p>
                <p className='bookingpara'>Select your preferred Date & Time for the service</p>
                        </Col>
                        <Col sm={4} style={{textAlign:'right'}}>
                        <SearchBar></SearchBar>
                        </Col>
                        <Row className='m-3 schedulebox'>
                        <Col sm={6}>
                        </Col>
                        <Col sm={6}><p className='bookingpara' style={{fontSize:'14px'}}>Click on any of the slots from below available windows</p> 
                        <div class="row gx-2">
    <div class="col">
     <div class="p-2"><button className='timebtn disabled'>8:00 am</button></div>
    </div>
    <div class="col">
     <div class="p-2"><button className='timebtn disabled'>9:00 am</button></div>
    </div>
    <div class="col">
     <div class="p-2"><button className='timebtn disabled'>10:00 am</button></div>
    </div>
  </div>
  <div class="row gx-2">
    <div class="col">
     <div class="p-2"><button className='timebtn'>11:00 am</button></div>
    </div>
    <div class="col">
     <div class="p-2"><button className='timebtn'>12:00 pm</button></div>
    </div>
    <div class="col">
     <div class="p-2"><button className='timebtn'>01:00 pm</button></div>
    </div>
  </div>
  <div class="row gx-2">
    <div class="col">
     <div class="p-2"><button className='timebtn'>2:00 pm</button></div>
    </div>
    <div class="col">
     <div class="p-2"><button className='timebtn'>3:00 pm</button></div>
    </div>
    <div class="col">
     <div class="p-2"><button className='timebtn'>4:00 pm</button></div>
    </div>
  </div>
  <div class="row gx-2">
    <div class="col">
     <div class="p-2"><button className='timebtn'>5:00 pm</button></div>
    </div>
    <div class="col">
     <div class="p-2"><button className='timebtn'>6:00 pm</button></div>
    </div>
    <div class="col">
     <div class="p-2"><button className='timebtn'>7:00 pm</button></div>
    </div>
  </div>
  </Col>
                    </Row>
                    <p className='bookingpara'>Note: Post placing the order, we will connect you with the garage to take care of your car problems & services</p>  
                
                    </Row>  
           </div>
           <div style={{display:'flex'}} className='my-2'>
<svg xmlns="http://www.w3.org/2000/svg"  className='accounticon' width="78" height="78" viewBox="0 0 78 78">
  <defs>
    <filter id="Ellipse_2114" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_26339" data-name="Group 26339" transform="translate(9 6)">
    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Ellipse_2114)">
      <circle id="Ellipse_2114-2" data-name="Ellipse 2114" cx="30" cy="30" r="30" transform="translate(9 6)" fill="#2650d8"/>
    </g>
    <path id="Path_28627" data-name="Path 28627" d="M132.733,48.089a15.115,15.115,0,0,0-21.376,21.376l9.386,9.406a1.79,1.79,0,0,0,.581.39,1.772,1.772,0,0,0,.684.137,1.78,1.78,0,0,0,1.265-.527l9.459-9.495a15.055,15.055,0,0,0,0-21.287Zm-2.548,18.74-8.14,8.176L113.9,66.829a11.508,11.508,0,1,1,16.282,0ZM116.7,53.309a7.684,7.684,0,1,0,13.11,5.522,7.54,7.54,0,0,0-2.245-5.433,7.658,7.658,0,0,0-10.866-.089Zm8.354,8.337a1.716,1.716,0,1,0-.09,0Z" transform="translate(-92.035 -31.531)" fill="#fff" stroke="#fff" stroke-width="1"/>
  </g>
</svg>

                        <Row className='px-5 py-3 accountbg'>
                <p className='bookinghead1'>Pick up & Drop Address</p>
                <p className='bookingpara'>Add or choose your preferred address for pick up & drop</p>
                    </Row>  
           </div>
           <div style={{display:'flex'}} className='my-2'>
           <svg xmlns="http://www.w3.org/2000/svg" className='accounticon' width="78" height="78" viewBox="0 0 78 78">
  <defs>
    <filter id="Ellipse_2115" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_26340" data-name="Group 26340" transform="translate(9 6)">
    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Ellipse_2115)">
      <circle id="Ellipse_2115-2" data-name="Ellipse 2115" cx="30" cy="30" r="30" transform="translate(9 6)" fill="#2650d8"/>
    </g>
    <g id="Group_26336" data-name="Group 26336" transform="translate(13.364 18.456)">
      <path id="Path_20749" data-name="Path 20749" d="M161.521,480.667H135.552a2.885,2.885,0,0,0-2.885,2.885v17.313a2.886,2.886,0,0,0,2.885,2.887h25.969a2.886,2.886,0,0,0,2.887-2.887V483.552A2.886,2.886,0,0,0,161.521,480.667Z" transform="translate(-132.667 -480.667)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path id="Path_20750" data-name="Path 20750" d="M132.667,484.667h31.741" transform="translate(-132.667 -476.01)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    </g>
  </g>
</svg>


                        <Row className='px-5 py-3 accountbg'>
                <p className='bookinghead1'>Payments</p>
                <p className='bookingpara'>Select your preferred payment method</p>
                    </Row>  
           </div> 
            </Row>
    </>
);



