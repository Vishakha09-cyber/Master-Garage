import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import Audi17 from '../../Images/CarGarage/Manufacturer 200 X 200/Audi17.jpeg';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import Car from '../../Images/ImagesAll/drawable-xhdpi/Car.png';
import Elitei20 from '../../Images/CarGarage/Models/2 Hyundai/Elitei20.jpeg';
import qr from '../../Images/drawable-xxxhdpi/qr.png';
import Fastaglogo from '../../Images/drawable-xxxhdpi/Fastaglogo.png';
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

function BasicShowmore(){
    return <>
    <div className='container-fluid px-5'>
        <Row>
                <div className='py-3'>
                    <Link to ="/PeriodicADDvechicle"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/PeriodicADDvechicle">Add services & Choose a garage</Link>
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
export default BasicShowmore;

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
    const[totalamount,setAmount]=useState("")
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
        <div className='BoxWithBox'>
        <div className='Re_SubmidBgBox p-2'>
            <Row>
            <Col sm={9}>
                <p className='poppins18'>Basic Service</p>
                <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}}></img> Every 5000 Kms or 3 months</p>
                <p className='poppins15light'><img src={check} style={{width:'12px'}}></img> 9 Points Service</p>
                <div style={{paddingTop:'25px'}}>
                <p className='OpenSans22'>&#8377;1459</p>
                </div>
            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={BasicService} style={{width:'127px',height:'120px'}}></img>
                <Link to="/ServiceEstimates"><button className='addcar'>ADD</button></Link>
                </div>
                
            </Col>
            </Row>
        </div> 
            <div className='py-2'>
            <Row>
                <Col sm={6}><p className='poppins15blue px-3'>What's Included</p></Col>
                <Col sm={6} ><svg id="Icon_ionic-ios-close-circle-outline" className='mx-3' data-name="Icon ionic-ios-close-circle-outline" xmlns="http://www.w3.org/2000/svg" style={{float:'right'}} width="20" height="20" viewBox="0 0 20 20">
  <path id="Path_27130" data-name="Path 27130" d="M18.938,17.98l-2.229-2.229,2.229-2.229a.676.676,0,1,0-.956-.956l-2.229,2.229-2.229-2.229a.676.676,0,0,0-.956.956L14.8,15.751,12.568,17.98a.654.654,0,0,0,0,.956.671.671,0,0,0,.956,0l2.229-2.229,2.229,2.229a.679.679,0,0,0,.956,0A.671.671,0,0,0,18.938,17.98Z" transform="translate(-5.754 -5.752)" fill="#f45c3b"/>
  <path id="Path_27131" data-name="Path 27131" d="M13.375,4.721a8.65,8.65,0,1,1-6.12,2.534,8.6,8.6,0,0,1,6.12-2.534m0-1.346a10,10,0,1,0,10,10,10,10,0,0,0-10-10Z" transform="translate(-3.375 -3.375)" fill="#f45c3b"/>
</svg>
</Col>
            </Row>
            
                <ul className='Showmore'>
                    <li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Engine Oil Replacement</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Oil Filter Replacement</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Air Filter Cleaning</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Coolant Top up </p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Wiper Fluid Replacement</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Battery Water Top up</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Heater/Spark plugs checking</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Car Wash</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Interior Vacuuming  (Carpets & Seats)</p>
</li>
                </ul>
                
            </div>
            
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
                <button className='addcar'>ADD </button>
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
                <button className='addcar'>ADD</button>
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
                <button className='addcar'>ADD </button>
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
                <button className='addcar'>ADD</button>
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
                <button className='addcar'>ADD</button>
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
                <button className='addcar'>ADD</button>
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
                <button className='addcar'>ADD</button>
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
            
        
        <div class="boxlast py-3 px-3" style={{textAlign:'Left'}}>
    <Row className='m-3'>
        <Col sm={8}>
        <p className='poppins18B'>Maruti Suzuki XL5</p>
        <p className='poppins15R'>MH 01 AB 3827</p>
        <p className='poppins12light'>Petrol, VDI, 1299cc</p>

        </Col>
        <Col sm={4}><img src={Venue} style={{height:'80px',float:'right',width:'120px'}}></img></Col>
        <p className='poppins12R'>
        Insurance valid till Feb 2018
        </p>    
        </Row>
        <Row style={{textAlign:'center'}}>
            <form >
            <input
    className='changeInput'
        type="text"
        value="MH 01 AB 1234 "
        name="add vechicle" 
    /><button className='addvechicle'>Change</button>
            </form>
        </Row>
         
        <Row className='m-3'>
        <Col sm={4}><img src={Fastaglogo} style={{width:'120px'}}></img></Col>
         <Col sm={8} style={{textAlign:'center',padding:'20px'}}><h6>Your Fastag balance is 456</h6></Col>   
        </Row>
        <Row className=''>
        <div className='noservice'>
        <p style={{fontSize:'20px',color:'blue'}}><i class="fas fa-shopping-cart"></i>No services yet!</p><br></br>
            Start adding service to your cart to see prices</div>
        
        </Row>
        </div>


    </>
);


