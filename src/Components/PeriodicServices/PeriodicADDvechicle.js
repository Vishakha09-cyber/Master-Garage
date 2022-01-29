import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import Audi17 from '../../Images/CarGarage/Manufacturer 200 X 200/Audi17.jpeg';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import Car from '../../Images/ImagesAll/drawable-xhdpi/Car.png';
import Elitei20 from '../../Images/CarGarage/Models/2 Hyundai/Elitei20.jpeg';
import qr from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/qr.png';
import Baleno from '../../Images/CarBrand/Models/1 Maruti Suzuki/WBG/Baleno.png';
import BasicService from '../../Images/BasicService.png';
import StandardService from '../../Images/StandardService.png';
import EngineScanning from '../../Images/EngineScanning.png';
import ComprehensiveService from '../../Images/ComprehensiveService.png';
import CompleteService from '../../Images/CompleteService.png';
import CarInspection from '../../Images/CarInspection.png';
import StarterMotor from '../../Images/StarterMotor.png';
import CarFluid from '../../Images/CarFluid.png';
import systemUpdate from '../../Images/systemUpdate.png';
import check from '../../Images/check.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';

function PeriodicADDvechicle(){
    return <>
    <div className='container-fluid px-5'>
        <Row>
                <div className='py-3'>
                    <Link to ="/PeriodicService"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/PeriodicService">Add services & Choose a garage</Link>
                </div>
            </Row>
            <Row>
                <Col sm={2} ><SideBar></SideBar></Col>
                <Col sm={6} ><MidBar></MidBar></Col>
                <Col sm={4} ><SubLast></SubLast></Col>
                
            </Row>

    </div>
            
    </>
}
export default PeriodicADDvechicle;

function SideBar(){
    return<>
        <ul className='sidebar'>
            <li className='btn1 btn btn-secondary '><Link to="" style={{textDecoration:'none'}} ><p style={{color:'#2650D8',fontSize:'15px',fontWeight:'bold',marginBottom:'8px'}}>Periodic Service</p>
            <p className='poppins12light'>Scheduled Service Packages</p>
            <p className='poppins12light' style={{color:'#999999'}}>Other Service Packages</p></Link></li>
            <li  className='btn btn-light' ><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Running Repairs</Link></li>
            <li  className='btn btn-light '><Link to=""  style={{textDecoration:'none',color:'#00155A'}}  >Denting & Painting</Link></li>
            <li  className='btn btn-light '><Link to=""  style={{textDecoration:'none',color:'#00155A'}}  >Body Fittings</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >AC Service & Repairs</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Battery Care</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Wheel Care</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Inspection Service</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Insurance Repairs</Link></li>
        </ul>    
    </>
   
  
}
function MidBar(){
    return<>
    <div className='px-5'>
    <SearchBar></SearchBar>
        <div className='py-4'>
        <p  className=' submidtext'>PERIODIC SERVICE</p>
        <h3 className='submidtext2'>Scheduled Service Packages</h3>
        <SubMid></SubMid>
        </div>
    </div>
    
    
    </>
}
const SearchBar = () => (
    <form action="/" method="get">
    <div className='searchbox'>
    <i class='fas fa-search'></i>
        <input
        className='Searchgarage'
            type="text"
            placeholder="Search for Services"
            name="Location" 
        />
    </div>
        
    </form>
);

const SubMid = () =>(
    <>      
        <div>
        <div className='SubmidBgBox p-2 my-2'>
            <Row>
            <Col sm={9}>
                <p className='poppins18'>Basic Service</p>
                <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}}></img> Every 5000 Kms or 3 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 9 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'30px' ,fontSize:'12px'}}>Show more</Link>
                </div>
               

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={BasicService} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD CAR</button>
                </div>
                
            </Col>
            </Row>
        </div> 
        <div className='SubmidBgBox px-2 my-2'>
        <Row >
        <Row className='p-0'><svg id="Group_26850" style={{width:'25%',marginLeft:'20px'}} data-name="Group 26850" xmlns="http://www.w3.org/2000/svg" width="113" height="15" viewBox="0 0 113 15">
  <rect id="Rectangle_6338" data-name="Rectangle 6338" width="113" height="15" rx="2" fill="#2650d8"/>
  <text id="Recommended" transform="translate(56 12)" fill="#fff" font-size="11" font-family="SegoeUI, Segoe UI" letter-spacing="0.003em"><tspan x="-36.75" y="0">Recommended</tspan></text>
</svg></Row>
    
            <Col sm={9}>
                <p className='poppins18'>Standard Service</p>
                <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 15 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'30px' ,fontSize:'12px'}}>Show more</Link>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={StandardService} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row> 
        </div> 
        <div className='SubmidBgBox p-2 my-2'>
        <Row >
            <Col sm={9}>
                <p className='poppins18'>Comprehensive Service</p>
                <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 20 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'30px' ,fontSize:'12px'}}>Show more</Link>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={ComprehensiveService} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row>
        </div>
        <div className='py-3'>
            <h3 className='submidtext2'>Other Service Packages</h3>
        </div>
        <div className='SubmidBgBox p-2 my-2'>
            <Row>
            <Col sm={9}>
            <p className='poppins18'>Engine Scanning</p>
                <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>Scanner Report Provided</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'30px' ,fontSize:'12px'}}>Show more</Link>
                </div>
               

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={EngineScanning} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD CAR</button>
                </div>
                
            </Col>
            </Row>
        </div>
        <div className='SubmidBgBox p-2 my-2'>
            <Row>
            <Col sm={9}>
            <p className='poppins18'>Complete Suspension Inspection</p>
                <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img>Scanner Report Provided</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'30px' ,fontSize:'12px'}}>Show more</Link>
                </div>
               

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={CompleteService} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD CAR</button>
                </div>
                
            </Col>
            </Row>
        </div>
        <div className='SubmidBgBox px-2 my-2'>
        <Row >
        <Row className='p-0'><svg id="Group_26850" style={{width:'25%',marginLeft:'20px'}} data-name="Group 26850" xmlns="http://www.w3.org/2000/svg" width="113" height="15" viewBox="0 0 113 15">
  <rect id="Rectangle_6338" data-name="Rectangle 6338" width="113" height="15" rx="2" fill="#2650d8"/>
  <text id="Recommended" transform="translate(56 12)" fill="#fff" font-size="11" font-family="SegoeUI, Segoe UI" letter-spacing="0.003em"><tspan x="-36.75" y="0">Recommended</tspan></text>
</svg></Row>
    
            <Col sm={9}>
            <p className='poppins18'>Car Inspection & Diagnostics</p>
                <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}}></img> Every 10000 Kms or 6 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> Scanner Report Provided</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'30px' ,fontSize:'12px'}}>Show more</Link>
                </div>

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={CarInspection} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD CAR</button>
                </div>
                
            </Col>
        </Row> 
        </div>  
        <div className='SubmidBgBox p-2 my-2'>
            <Row>
            <Col sm={9}>
            <p className='poppins18'>Car Fluid Check</p>
                <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}}></img> On Leakage or Check Lights</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 5 Points Checklist</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'30px' ,fontSize:'12px'}}>Show more</Link>
                </div>
               

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={CarFluid} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD CAR</button>
                </div>
                
            </Col>
            </Row>
        </div> 
        <div className='SubmidBgBox p-2 my-2'>
            <Row>
            <Col sm={9}>
            <p className='poppins18'>Starter Motor Repair</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img> In Case of Car not Starting
</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 5 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <Link to ="" style={{marginTop:'30px' ,fontSize:'12px'}}>Show more</Link>
                </div>
               

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={StarterMotor} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD CAR</button>
                </div>
                
            </Col>
            </Row>
        </div> 


        
            
            <Row className=' footerbg m-0 mt-3'>
                    
                    <h2>Peace of Mind Guarantee Program</h2>
                    <ol>
                        <li><i class="fas fa-chevron-circle-down"></i> Competitive Pricing</li>
                        <li><i class="fas fa-chevron-circle-down"></i> Secure Payments</li>
                        <li><i class="fas fa-chevron-circle-down"></i> High Quality Service</li>
                        <li><i class="fas fa-chevron-circle-down"></i> &#8377;25000 Warrenty</li>
                    </ol>
                    <span>Know more    <i class="fas fa-arrow-circle-right"></i></span>
                    <img  src={PS1} style={{float:'right',width:'200px',height:'60px'}}></img>
                    
            </Row>
        </div>
            
    </>
);

const SubLast = () => (
    <>
            
        <div class="boxlast py-3" >
    <Row style={{justifyContent:'center',textAlign:'center'}}>
    <img src={Car} style={{float:'center',width:'270px',height:'187px',padding:'20px'}}></img>
         
         <Row className='m-3'>
             <p  className='poppins22M' style={{textAlign:'Left'}}>Enter Vechicle Registration Number</p>
         </Row>
         <Row className='py-4'>
         <p  className='poppins15light px-3' style={{}}>So we can show you the best prices for your vechicle service nearby garages</p>
         </Row>
         
         <form className='py-3'> <input
     className='addvechicleInput'
         type="text"
         placeholder="Example - MH 01 AB 1234 "
         name="add vechicle" 
     /><Link to="/PeriodicServiceAdded"><button className='addvechicle'>Submit</button></Link>
         </form>
         <Row>
         <p  className='poppins12light' style={{textAlign:'left'}}>Don't worry your information safe with us we will use your number to fetch your car make & model so we can show accordingly</p> 
         </Row>
        
     
    </Row>
    
        
        </div>

    </>
);


