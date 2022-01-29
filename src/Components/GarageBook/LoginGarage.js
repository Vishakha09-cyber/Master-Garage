import React from 'react';
import {Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
import './LoginBook.css';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';

function LoginBook(){
    return <>
    <div className='container-fluid'>
        <Row>
                <div className='linkhead'>
                    <Link to ="/BookGarageA"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/BookGarageA">Confirm Booking</Link>
                </div>
            </Row>
            <Row className='px-5 py-2'> 
                <Col sm={8} ><SubMid></SubMid></Col>
                <Col sm={4}  ><SubLast></SubLast></Col>
                
            </Row>

    </div>
            
    </>
}
export default LoginBook;

const SearchBar = () => (
    <form action="/" method="get">
        <input
        className='phoneinput'
            type="text"
            value="+91 | Phone Number"
            name="phonenumber" 
        />
        <Link to="/ScheduleBook"><button className='submitphone'>Submit</button></Link>
    </form>
);
const SubMid = () =>(
    <>

           <Row className='px-3'>
          
                <Row className='m-0 p-2 loginbox1 '>
                    <div >
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78">
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
</span>
                        <Row className='px-5'>
                <p className='bookinghead1'>Account</p>
                <p className='bookingpara'>Please login to your existing account or sign-up to confirm booking</p>
                    <SearchBar></SearchBar>
                </Row> 
                    </div>
                
                
                  
                </Row> 
                <Row className='m-0 p-2 my-2 loginbox1 '>
                <i class=" stop fas fa-stopwatch"></i>
                <Row className='px-5'>
                <p className='bookinghead1'>Service Schedule</p>
                <p className='bookingpara'>Select your preferred Date & Time for the service</p>
                </Row>   
                </Row>  
                <Row className='m-0 p-2 my-2 loginbox1 '>
                <i class=" location fas fa-map-marker-alt"></i>
                <Row className='px-5'>
                <p className='bookinghead1'>Pick up & Drop Address</p>
                <p className='bookingpara'>Add or choose your preferred address for pick up & drop </p>
                </Row>   
                </Row>  
                <Row className='m-0 p-2 my-2 loginbox1 '>
                <i class="far fa-credit-card"></i>
                <Row className='px-5'>
                <p className='bookinghead1'>Payments</p>
                <p className='bookingpara'>Select your preferred payment method </p>
                </Row>   
                </Row>       
            </Row>
    </>
);

const SubLast = () => (
    <><div class="boxlast">
        <Row className='p-0 m-0' style={{backgroundColor:'#F8F9FA',borderRadius:'10px 10px 0px 0px '}}>
       
        <Col sm={6} className='w-25 p-1' ><img src={FirstChoice} style={{width:'100px',height:'80px',borderRadius:'10px'}}></img></Col>
                    <Col sm={6} className='w-75'>
                    <Row className='py-3'>
                        <Col sm={6} >
                        <p style={{fontSize:'15px',marginBottom:'3px'}}>Mahindra First Choice</p>
                        <p style={{fontSize:'12px',color:'grey'}}><i class="fas fa-map-marker-alt"></i>Kandivali East 400 101</p> 
                        </Col>
                        <Col sm={6} style={{paddingLeft:'50px'}}>
                            <i class="fas fa-phone-alt"></i>
                            <i class="far fa-comment"></i>
                        </Col>
                    </Row>
                    </Col>
        </Row>
        <Row className='p-0 m-0' style={{backgroundColor:'#4EE59D',borderRadius:'0px 0px 10px 10px',boxShadow:'0 0 15px 0 rgb(0 0 0 / 37%) '}}>
                    <Col sm={6}><p style={{fontSize:'20px',fontWeight:'bolder',color:'#00155A'}}>CART</p></Col>
                    <Col sm={6}><p style={{float:'right',color:'#00155A',fontSize:'20px'}}>8 Items</p></Col>
                    
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><h6>Windshield Wiper</h6>
                    <p style={{marginBottom:'0px',fontSize:'14px',color:'grey'}}>Scanner Report Provided</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={6} className='w-75 p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p style={{fontWeight:'bolder'}}>&#8377;456</p>
                            </Col>
                            <Col sm={6} className='p-0 w-25'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><h6>Basic Service</h6>
                    <p style={{marginBottom:'0px',fontSize:'14px',color:'grey'}}>Mobil SW40 Semi Synthetic</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={6} className='w-75 p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p style={{fontWeight:'bolder'}}>&#8377;456</p>
                            </Col>
                            <Col sm={6} className='p-0 w-25'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><h6>Front Shockup Change</h6>
                    <p style={{marginBottom:'0px',fontSize:'14px',color:'grey'}}>Check engine</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={6} className='w-75 p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p style={{fontWeight:'bolder'}}>&#8377;456</p>
                            </Col>
                            <Col sm={6} className='p-0 w-25'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><h6>Basic Service</h6>
                    <p style={{marginBottom:'0px',fontSize:'14px',color:'grey'}}>Mobil SW40 Semi Synthetic</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={6} className='w-75 p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p style={{fontWeight:'bolder'}}>&#8377;456</p>
                            </Col>
                            <Col sm={6} className='p-0 w-25'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='px-3'>
                    <Col sm={6}><h6>Basic Service</h6>
                    <p style={{marginBottom:'0px',fontSize:'14px',color:'grey'}}>Mobil SW40 Semi Synthetic</p>
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={6} className='w-75 p-0 m-0' style={{textAlign:'right'}}>
                            <p style={{textDecoration:'line-through',marginBottom:'0px',fontSize:'14px',color:'grey'}}>&#8377;999</p>
                            <p style={{fontWeight:'bolder'}}>&#8377;456</p>
                            </Col>
                            <Col sm={6} className='p-0 w-25'><i class="far fa-times-circle" style={{color:'red',float:'right',fontSize:'18px'}}></i></Col>
                        </Row>
                    </Col>
                    <hr></hr>
                </Row>
                <Row className='p-0 m-0' style={{backgroundColor:'#2650D8',color:'#fff',borderRadius:'10px'}}>
                    <Col sm={6}>
                        <p style={{fontSize:'20px',fontWeight:'bolder',marginBottom:'0px'}}>To Pay</p>
                        <p style={{fontSize:'12px',fontWeight:'bolder'}}>Inclusive of all Charges</p>
                    </Col>
                    <Col sm={6} style={{fontSize:'20px',fontWeight:'bolder',textAlign:'right'}}>&#8377;6459</Col>
                </Row>
               
        
        </div>
        

    </>
);


