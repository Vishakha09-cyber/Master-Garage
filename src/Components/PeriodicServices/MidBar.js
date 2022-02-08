import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
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
import ShowMore from './ServicesShowmore';
import {Periodic,specialservice} from './Periodic';
import {useSelector} from 'react-redux';



function MidBar(){
    const handleClick=(item)=>{
        console.log(item)
    }
   // const{}=useSelector((state)=>state.cart1)
    return<>
    <div className='px-5'>
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
        <div className='py-4'>
        <p  className=' submidtext'>PERIODIC SERVICE</p>
        <h3 className='submidtext2'>Scheduled Service Packages</h3>
        {/* <SubMid></SubMid> */}
        <div>
        { Periodic.map((item,key)=>(<div className='SubmidBgBox p-2 my-2'>
           
                <Row>
                <Col sm={9} key='key'>
                    <p className='poppins18'>{item.title}</p>
                    <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}}></img>{item.yearmonth}</p>
                    <p className='poppins15light'><img src={item.check} style={{width:'12px'}}></img> {item.points}</p>
                    {/* <div style={{paddingTop:'25px'}}>
                    <ShowMore></ShowMore>
                    </div> */}
                    <p>more show{item.amount}</p>
                    </Col>
                    <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={item.img} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar' onClick={(e)=>handleClick(item)}>ADD CAR</button>
                </div>
            </Col>
        </Row>
        </div> ))}
        
        <div className='py-3'>
            <h3 className='submidtext2'>Other Service Packages</h3>
        </div>
        {specialservice.map((data,key)=>(
             <div className='SubmidBgBox p-2 my-2'>
              <Row>
            <Col sm={9}>
            <p className='poppins18'>{data.title}</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img>{data.yearmonth2}</p>
                <p className='poppins15light'><img src={data.check} style={{width:'12px'}}></img>{data.pointservice}</p>
                <div style={{paddingTop:'25px'}}>
                <p style={{marginTop:'30px' ,fontSize:'12px'}}>Show more{data.amount}</p>
                </div>
               

            </Col>
            <Col sm={3}>
                <div style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={data.img} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD CAR</button>
                </div>
                
            </Col>
            </Row>
             </div>
        ))}
            
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
        </div>
    </div>
    
    
    </>
}

export default MidBar;