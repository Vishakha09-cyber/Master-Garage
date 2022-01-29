import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
import './Schedule.css';
import './address.css';
import './paynow.css';
import Americanlogo from '../../Images/Americanlogo.png';
import Visalogo from '../../Images/Visalogo.png';
import Rupaylogo from '../../Images/Rupaylogo.png';
import Masterlogo from '../../Images/Masterlogo.png';
import Gpaylogo from '../../Images/Gpaylogo.png';
import Bhimlogo from '../../Images/Bhimlogo.png';
import Phonepelogo from '../../Images/Phonepelogo.png';
import Pocketlogo from '../../Images/Pocketlogo.png';
import Paytmlogo from '../../Images/Paytmlogo.png';
import Mobiklogo from '../../Images/Mobiklogo.png';
import Freechargelogo from '../../Images/Freechargelogo.png';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';


function PayNow(){
    return <>
    <div className='container-fluid'>
        <Row>
                <div className='linkhead'>
                    <Link to ="/Await"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/Await">Confirm Booking</Link>
                </div>
            </Row>
            <Row className='px-5'> 
                <Col sm={8} ><SubMid></SubMid></Col>
                <Col sm={4}  ><SubLast></SubLast></Col>   
            </Row>
    </div>            
    </>
}
export default PayNow;
const SubMid = () =>(
    <>
    <Row>
        <Row className='m-0 p-3 my-2 loginbox1 '>
        <p className='px-5' style={{fontSize:'18px',color:'#606161'}}> Preferred Payments</p>
            <Row className='px-5 m-0'>
            <Row className='px-3  paymentbox'>
            <Row><p> <img src={Gpaylogo} style={{width:'70px'}}></img>Google pay <input className='radiobtn' type="radio" name="gpay" checked></input></p></Row>
            <Row><p> <img src={Visalogo} style={{width:'60px'}}></img> 1234-XXXXXXXX-7890 <input  className='radiobtn'type="radio" name="gpay"></input></p></Row>
            </Row>
            </Row>
            <p className='px-5' style={{fontSize:'18px',color:'#606161'}}>Credit/Debit Cards</p>
            <Row className='px-5 m-0'>
            <Row className='px-3  paymentbox'>
            <Row><p> <img src={Visalogo} style={{width:'60px'}}></img>1234-XXXXXXXX-7890 <input  className='radiobtn'type="radio" name="gpay"></input></p></Row> 
            <Row>
                <Col sm={6}>
                <Row>
                    <Col sm={1}><i class="fas fa-plus-circle" style={{fontSize:'25px',color:'blue',marginTop:'15px'}}></i></Col>
                    <Col sm={11}><p style={{fontSize:'20px',marginBottom:'0px'}}>Add New Card</p>
                    <p className='bookingpara'>Save & Pay via Cards</p></Col>
                </Row>
                 </Col>
                <Col sm={6}><img src={Americanlogo} style={{width:'80px'}}></img>
                <img src={Masterlogo} style={{width:'70px'}}></img>
                <img src={Visalogo} style={{width:'80px'}}></img>
                <img src={Rupaylogo} style={{width:'80px'}}></img></Col>
            </Row>      
            </Row>
            </Row>
            <p className='px-5' style={{fontSize:'18px',color:'#606161'}}>UPI</p>
            <Row className='px-5 m-0'>
            <Row className='px-3  paymentbox'> 
            <Row>
                <Col sm={6}>
                <Row>
                    <Col sm={1}><i class="fas fa-plus-circle" style={{fontSize:'25px',color:'blue',marginTop:'15px'}}></i></Col>
                    <Col sm={11}><p style={{fontSize:'20px',marginBottom:'0px'}}>ADD A NEW UPI</p>
                    <p className='bookingpara'>You need to have a registered UOI ID</p></Col>
                </Row>
                 </Col>
                <Col sm={6} style={{marginTop:'10px'}}><img src={Gpaylogo} style={{width:'80px'}}></img>
                <img src={Bhimlogo} style={{width:'70px'}}></img>
                <img src={Phonepelogo} style={{width:'80px'}}></img>
                <img src={Pocketlogo} style={{width:'80px'}}></img></Col>
            </Row>      
            </Row>
            </Row>
            <p className='px-5' style={{fontSize:'18px',color:'#606161'}}>Wallets</p>
            <Row className='px-5 m-0'>
            <Row className='px-3  paymentbox'> 
                    <Row>
                    <Col sm={1}><img src={Paytmlogo} style={{width:'70px',padding:'5px'}}></img></Col>
                    <Col sm={11}><p style={{fontSize:'20px',marginBottom:'0px'}}>Patym</p>
                    <input className='radiobtn' type="radio" name="gpay" ></input>
                    <p className='bookingpara'>Link your Paytm wallet to use this payment method</p></Col>
                    </Row>  
                    <Row>
                    <Col sm={1}><img src={Mobiklogo} style={{width:'70px',padding:'5px'}}></img></Col>
                    <Col sm={11}><p style={{fontSize:'20px',marginBottom:'0px'}}>Mobikwik</p>
                    <input className='radiobtn' type="radio" name="gpay" ></input>
                    <p className='bookingpara'>Link your Paytm wallet to use this payment method</p></Col>
                    </Row>
                    <Row>
                    <Col sm={1}><img src={Freechargelogo} style={{width:'70px',padding:'5px'}}></img></Col>
                    <Col sm={11}><p style={{fontSize:'20px',marginBottom:'0px'}}>Free Charge</p>
                    <input className='radiobtn' type="radio" name="gpay"></input>
                    <p className='bookingpara'>Link your Paytm wallet to use this payment method</p></Col>
                    </Row>       
            </Row>
            </Row>
            <p className='px-5' style={{fontSize:'18px',color:'#606161'}}>Netbanking</p>
            <Row className='px-5 m-0'>
            <Row className='px-3  paymentbox'> 
            <Row>
                <Col sm={6}>
                <Row>
                    <Col sm={1}><i class="fas fa-plus-circle" style={{fontSize:'25px',color:'blue',marginTop:'15px'}}></i></Col>
                    <Col sm={11}><p style={{fontSize:'20px',marginBottom:'0px'}}>NETBANKING</p>
                    <p className='bookingpara'>Select from a list of banks</p></Col>
                </Row>
                </Col>
            </Row>      
            </Row>
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


