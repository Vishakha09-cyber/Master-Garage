import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
import './Schedule.css';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';


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
                <Col sm={4}  ><SubLast></SubLast></Col>
                
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

const SubLast = () => (
    <><div class="boxlast">
        <Row className=' m-0 p-1' style={{backgroundColor:'#F8F9FA',borderRadius:'10px 10px 0px 0px '}}>
       
        <Col sm={2} className='p-0'><img src={FirstChoice} style={{width:'77px',height:'77px',borderRadius:'10px'}}></img></Col>
                    <Col sm={10} className='py-2'>
                    <Row >
                        <Col sm={8}>
                        <p className='poppins18B '>Mahindra First Choice</p>
                        <p className='poppins15light '><svg xmlns="http://www.w3.org/2000/svg" width="8.279" height="12.766" className='mx-2' viewBox="0 0 8.279 12.766">
  <path id="Icon_metro-location" data-name="Icon metro-location" d="M12.494,1.928a4.067,4.067,0,0,0-4.14,3.989c0,3.989,4.14,8.777,4.14,8.777s4.14-4.787,4.14-8.777a4.067,4.067,0,0,0-4.14-3.989Zm0,6.433A2.491,2.491,0,0,1,9.959,5.918a2.537,2.537,0,0,1,5.071,0A2.491,2.491,0,0,1,12.494,8.361Zm-1.6-2.444a1.605,1.605,0,0,1,3.208,0,1.605,1.605,0,0,1-3.208,0Z" transform="translate(-8.355 -1.928)" fill="#5d6186"/>
</svg>
Kandivali East 400 101</p> 
                        </Col>
                        <Col sm={4} className='py-2'>
                        <svg id="Group_26144"  data-name="Group 26144" xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='mx-2' viewBox="0 0 30 30">
  <circle id="Ellipse_1542" data-name="Ellipse 1542" cx="15" cy="15" r="15" fill="#53bd8c"/>
  <g id="telephone-2" transform="translate(6.85 6.621)">
    <path id="Path_1428" data-name="Path 1428" d="M4.215,11.139a17.426,17.426,0,0,0,5.774,4.632,8.831,8.831,0,0,0,3.231.979c.078,0,.153.007.231.007a2.647,2.647,0,0,0,2.075-.913.076.076,0,0,0,.014-.017,8.855,8.855,0,0,1,.654-.694c.159-.156.322-.319.478-.486a1.7,1.7,0,0,0-.007-2.5l-2.038-2.087A1.633,1.633,0,0,0,13.433,9.5a1.687,1.687,0,0,0-1.207.559L11.013,11.3c-.112-.066-.227-.125-.336-.181a4.163,4.163,0,0,1-.373-.208A12.96,12.96,0,0,1,7.236,8.052,7.608,7.608,0,0,1,6.2,6.358c.319-.3.617-.6.905-.906.1-.108.207-.215.312-.323a1.8,1.8,0,0,0,.563-1.25,1.785,1.785,0,0,0-.563-1.25L6.4,1.594c-.119-.122-.231-.24-.346-.361C5.835,1,5.6.753,5.371.535A1.672,1.672,0,0,0,4.177,0,1.721,1.721,0,0,0,2.97.538L1.7,1.837A2.7,2.7,0,0,0,.926,3.545,6.566,6.566,0,0,0,1.4,6.323,16.247,16.247,0,0,0,4.215,11.139ZM1.753,3.618a1.856,1.856,0,0,1,.539-1.181L3.554,1.146a.9.9,0,0,1,.624-.3.858.858,0,0,1,.61.3c.227.215.441.441.671.681.115.122.234.243.353.368l1.01,1.035a.952.952,0,0,1,.319.649.952.952,0,0,1-.319.649c-.105.108-.21.219-.315.326-.315.326-.61.635-.936.931l-.017.017a.691.691,0,0,0-.17.771c0,.01.007.017.01.028a8.211,8.211,0,0,0,1.19,1.983,13.679,13.679,0,0,0,3.268,3.049,4.819,4.819,0,0,0,.448.25,4.164,4.164,0,0,1,.373.208l.037.021a.7.7,0,0,0,.329.087.713.713,0,0,0,.505-.236l1.268-1.3a.889.889,0,0,1,.62-.309.845.845,0,0,1,.6.309l2.044,2.09a.85.85,0,0,1-.01,1.309c-.142.156-.292.306-.451.462a9.9,9.9,0,0,0-.709.754,1.841,1.841,0,0,1-1.454.632c-.058,0-.119,0-.176-.007a8.023,8.023,0,0,1-2.923-.9,16.554,16.554,0,0,1-5.5-4.41A15.55,15.55,0,0,1,2.181,6.038,5.721,5.721,0,0,1,1.753,3.618Z" transform="translate(-0.912 0)" fill="#fff" stroke="#fff" stroke-width="1"/>
  </g>
</svg>

<svg id="Group_26145" data-name="Group 26145" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
  <circle id="Ellipse_1931" data-name="Ellipse 1931" cx="15" cy="15" r="15" fill="#53bd8c"/>
  <path id="Path_22984" data-name="Path 22984" d="M50.074,34.118A7.018,7.018,0,0,1,49.32,37.3a7.118,7.118,0,0,1-6.364,3.936,7.016,7.016,0,0,1-3.182-.754L35,42.074,36.591,37.3a7.018,7.018,0,0,1-.754-3.182,7.118,7.118,0,0,1,3.936-6.364A7.019,7.019,0,0,1,42.956,27h.419a7.1,7.1,0,0,1,6.7,6.7Z" transform="translate(-27.537 -19.538)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>

                        </Col>
                    </Row>
                    </Col>
        </Row>
        <Row className='p-0 m-0' style={{backgroundColor:'#4EE59D',borderRadius:'0px 0px 10px 10px',boxShadow:'0 0 15px 0 rgb(0 0 0 / 37%) '}}>
                    <Col sm={6}><p style={{fontSize:'20px',fontWeight:'bolder',color:'#00155A'}}>CART</p></Col>
                    <Col sm={6}><p style={{float:'right',color:'#00155A',fontSize:'20px'}}>8 Items</p></Col>
                    
                </Row>
                <div className='scrollboxservices'>
                <Row className='px-3 p-0'>
                    <Col sm={6}><p className='poppins15R'>Basic Service</p>
                    <p className='poppins10R'>Mobil SW40 Semi Synthetic</p>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col sm={9} className=' p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p className='OpenSans15B'>&#8377;459</p>
                            </Col>
                            <Col sm={3} className='py-3'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='px-3 p-0'>
                    <Col sm={6}><p className='poppins15R'>Windshield Wiper</p>
                    <p className='poppins10R'>Scanner Report Provided</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={9} className=' p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p className='OpenSans15B'>&#8377;459</p>
                            </Col>
                            <Col sm={3} className='py-3'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                
                <Row className='px-3'>
                    <Col sm={6}><p className='poppins15R'>Basic Service</p>
                    <p className='poppins10R'>Mobil SW40 Semi Synthetic</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={9} className=' p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p className='OpenSans15B'>&#8377;459</p>
                            </Col>
                            <Col sm={3} className='py-3'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    
                    <hr></hr>
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><p className='poppins15R'>Front Shockup Change</p>
                    <p className='poppins10R'>Check engine</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={9} className=' p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p className='OpenSans15B'>&#8377;459</p>
                            </Col>
                            <Col sm={3} className='py-3'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><p className='poppins15R'>Basic Service</p>
                    <p className='poppins10R'>Mobil SW40 Semi Synthetic</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={9} className=' p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p className='OpenSans15B'>&#8377;459</p>
                            </Col>
                            <Col sm={3} className='py-3'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><p className='poppins15R'>Basic Service</p>
                    <p className='poppins10R'>Mobil SW40 Semi Synthetic</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={9} className=' p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p className='OpenSans15B'>&#8377;459</p>
                            </Col>
                            <Col sm={3} className='py-3'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><p className='poppins15R'>Car Inspection</p>
                    <p className='poppins10R'>Scanner Report Provided</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={9} className=' p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p className='OpenSans15B'>&#8377;459</p>
                            </Col>
                            <Col sm={3} className='py-3'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><p className='poppins15R'>Basic Service</p>
                    <p className='poppins10R'>Mobil SW40 Semi Synthetic</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={9} className=' p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p className='OpenSans15B'>&#8377;459</p>
                            </Col>
                            <Col sm={3} className='py-3'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                </div>
               
                <Row className='py-2 m-0' style={{backgroundColor:'#2650D8',color:'#fff',borderRadius:'10px'}}>
                    <Col sm={6}>
                        <p className='poppins18W'>To Pay</p>
                        <p className='poppins10W'>Inclusive of all Charges</p>
                    </Col>
                    <Col sm={6} className='OpenSans22W'>&#8377;6459</Col>
                </Row>
               
        
        </div>
        

    </>
);

