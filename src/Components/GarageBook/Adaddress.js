import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
import './Schedule.css';
import './address.css';
import CartBox from './CartBox';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';


function Address(){
    return <>
    <div className='container-fluid'>
        <Row>
                <div className='linkhead'>
                    <Link to ="/LoginBookGarage"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/LoginBookGarage">Confirm Booking</Link>
                </div>
            </Row>
            <Row> 
                <Col sm={8} ><SubMid></SubMid></Col>
                <Col sm={4}  ><CartBox></CartBox></Col>   
            </Row>
    </div>            
    </>
}
export default Address;

const SubMid = () =>(
    <>

           <Row >
          
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
                        <Col sm={10}>
                        <p className='bookinghead1'>Service Schedule</p>
                        <Link to="#" style={{textDecoration:'none'}}><p className='poppins22M'>Date : January 21st 2021 &nbsp; &nbsp; Time : 5.00 pm - 6.00 pm</p></Link>
                        </Col>
                        <Col sm={2} style={{textAlign:'right'}}>
                        <p style={{color:'red'}}>CHANGE</p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
  <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>
                        </Col>
                        
                
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
                <Link to="#" style={{textDecoration:'none'}}><p className='poppins22M'>Multiple addresses in this location</p></Link>
                <Row className='py-3'>
               
               <Row>
               <div class="row gx-2">
                   <div class="col">
                       <div class="p-2 schedulebox">
                       <Row>
                       <Col sm={1}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16.687" viewBox="0 0 15 16.687">
  <path id="Path_22575" data-name="Path 22575" d="M96.667,353.666l-5-4.383a2.5,2.5,0,0,0-3.333,0l-5,4.383a2.5,2.5,0,0,0-.833,1.884v7.283a2.5,2.5,0,0,0,2.5,2.5H95a2.5,2.5,0,0,0,2.5-2.5v-7.292a2.5,2.5,0,0,0-.833-1.875Zm-5,10H88.333V359.5a.835.835,0,0,1,.833-.834h1.667a.835.835,0,0,1,.833.834Zm4.167-.833a.833.833,0,0,1-.833.833H93.333V359.5a2.5,2.5,0,0,0-2.5-2.5H89.167a2.5,2.5,0,0,0-2.5,2.5v4.166H85a.833.833,0,0,1-.833-.833v-7.292a.835.835,0,0,1,.074-.343.849.849,0,0,1,.209-.282l5-4.375a.834.834,0,0,1,1.1,0l5,4.375a.851.851,0,0,1,.209.282.835.835,0,0,1,.074.343Z" transform="translate(-82.5 -348.646)"/>
</svg>
</Col>
                       <Col sm={11}><p className='poppins18RBlack'>Home</p>
                               <p className='poppins15r'>5, Vasant Kunj, Shanti Nagar, Near 
                                       Andheri Metro Station,Andheri East, 
                                       Mumbai- 123 456, Maharashtra, India</p>
                                       <button className='selectbtn'>Select</button>
                       </Col>
                       </Row>    
                       </div>
                   </div>
                   <div class="col">
                       <div class="p-2 schedulebox">
                       <Row>
                       <Col sm={1}><svg xmlns="http://www.w3.org/2000/svg" width="16.664" height="15" viewBox="0 0 16.664 15">
  <path id="Path_22576" data-name="Path 22576" d="M267.833,744h-2.5v-.833a1.666,1.666,0,0,0-1.666-1.667h-3.334a1.666,1.666,0,0,0-1.666,1.667V744h-2.5a2.5,2.5,0,0,0-2.5,2.5V754a2.5,2.5,0,0,0,2.5,2.5h11.666a2.5,2.5,0,0,0,2.5-2.5v-7.5a2.5,2.5,0,0,0-2.5-2.5Zm-7.5-.833h3.334V744h-3.334ZM268.667,754a.835.835,0,0,1-.834.833H256.167a.833.833,0,0,1-.834-.833v-4.675l3.9,1.342a.993.993,0,0,0,.267,0h5a1.012,1.012,0,0,0,.267-.042l3.9-1.3Zm0-6.433-4.3,1.433h-4.734l-4.3-1.433V746.5a.833.833,0,0,1,.834-.833h11.666a.835.835,0,0,1,.834.833Z" transform="translate(-253.668 -741.5)"/>
</svg>
</Col>
                       <Col sm={11}><p className='poppins18RBlack'>Office</p>
                               <p className='poppins15r'>5, Vasant Kunj, Shanti Nagar, Near 
                                       Andheri Metro Station,Andheri East, 
                                       Mumbai- 123 456, Maharashtra, India</p>
                                       <button className='select'>Selected</button>
                       </Col>
                       </Row>    
                       </div>
                   </div>
               </div>
                   </Row>
                   <Row className='py-2'>
               <div class="row gx-2">
                   <div class="col">
                       <div class="p-2 schedulebox">
                       <Row>
                       <Col sm={1}><svg xmlns="http://www.w3.org/2000/svg" width="13.333" height="16.652" viewBox="0 0 13.333 16.652">
  <path id="Path_22577" data-name="Path 22577" d="M90,495a1.666,1.666,0,1,0-1.178-.488A1.667,1.667,0,0,0,90,495Zm-.592,5.759a.829.829,0,0,0,.271.182.834.834,0,0,0,.641,0,.828.828,0,0,0,.271-.182L94,497.342a5.658,5.658,0,1,0-8,0Zm-3.383-7.809a3.992,3.992,0,1,1,6.8,3.217L90,498.992l-2.825-2.825a3.973,3.973,0,0,1-1.15-3.217Zm9.808,9.717H84.167a.834.834,0,0,0,0,1.667H95.834a.834.834,0,1,0,0-1.667Z" transform="translate(-83.333 -487.682)"/>
</svg>
</Col>
                       <Col sm={11}><p className='poppins18RBlack'>Others</p>
                               <p className='poppins15r'>5, Vasant Kunj, Shanti Nagar, Near 
                                       Andheri Metro Station,Andheri East, 
                                       Mumbai- 123 456, Maharashtra, India</p>
                                       <button className='selectbtn'>Select</button>
                       </Col>
                       </Row>    
                       </div>
                   </div>
                   <div class="col">
                       <div class="p-2 schedulebox">
                       <Row>
                       <Col sm={1} ><p  style={{color:'#2650D8'}} > <svg xmlns="http://www.w3.org/2000/svg" width="13.333" height="16.652" viewBox="0 0 13.333 16.652">
  <path id="Path_22577" data-name="Path 22577" d="M90,495a1.666,1.666,0,1,0-1.178-.488A1.667,1.667,0,0,0,90,495Zm-.592,5.759a.829.829,0,0,0,.271.182.834.834,0,0,0,.641,0,.828.828,0,0,0,.271-.182L94,497.342a5.658,5.658,0,1,0-8,0Zm-3.383-7.809a3.992,3.992,0,1,1,6.8,3.217L90,498.992l-2.825-2.825a3.973,3.973,0,0,1-1.15-3.217Zm9.808,9.717H84.167a.834.834,0,0,0,0,1.667H95.834a.834.834,0,1,0,0-1.667Z" transform="translate(-83.333 -487.682)"/>
</svg></p>
</Col>
                       <Col sm={11}><p className='poppins18RBlack' style={{color:' #2650D8'}}>Add new address</p>
                               <p className='poppins15r'>Mira Road, mira bhayander, 401 105</p>
                                 <Link to="/PaymentGarage" style={{textDecoration:'none'}}><button className='selectadd'>ADD</button></Link>      
                       </Col>
                       </Row>    
                       </div>
                   </div>
               </div>
                   </Row>
               </Row>  
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



