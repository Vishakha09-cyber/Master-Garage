import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';
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

import data from '../utill/data.json'
console.log(data);



function PeriodicADDvechicle(){

    const SubLast = () => {
        const[registerNo,setRegisterNo]=useState(data)
        const[information,setInformation]=useState('')
    
    const handlefilter=()=>{
        let temp={}
        Object.entries(data.cars).map(a=>{
            a[1].map(b=>{
                if(b.Registeration==registerNo){
                    temp=b
                }
            })
        })
        information(temp)
        console.log(temp)
    }
    
        return(
            <>
            <div class="boxlast py-3" >
        <Row style={{justifyContent:'center',textAlign:'center'}}>
        <img src={Car} style={{float:'center',width:'270px',height:'187px',padding:'20px'}} alt="error"></img>
             
             <Row className='m-3'>
                 <p  className='poppins22M' style={{textAlign:'Left'}}>Enter Vechicle Registration Number</p>
             </Row>
             <Row className='py-4'>
             <p  className='poppins15light px-3' style={{}}>So we can show you the best prices for your vechicle service nearby garages</p>
             </Row>
             
             <form className='py-3'> 
             <input
               className='addvechicleInput'
             type="text"
             onChange={(e)=>setRegisterNo(e.target.value)}
             placeholder="Example - MH 01 AB 1234 "
             name="add vechicle" 
                 /><Link to="/PeriodicServiceAdded"><button className='addvechicle' onClick={()=>handlefilter()}>Submit</button></Link>
             </form>
             <Row>
                 <p>{setInformation}</p>
             <p  className='poppins12light' style={{textAlign:'left'}}>Don't worry your information safe with us we will use your number to fetch your car make & model so we can show accordingly</p> 
             </Row>
            
         
        </Row>
        
            
            </div>
    
        </>)
    }

    return( <>
    <div className='container-fluid px-5'>
        <Row>
                <div className='py-3'>
                    <Link to ="/PeriodicService"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/PeriodicService">Add services & Choose a garage</Link>
                </div>
            </Row>
            <Row>
                <Col lg={2} sm={2}><SideBar></SideBar></Col>
                <Col lg={6} sm={8} ><MidBar></MidBar></Col>
                <Col lg={4} sm={3}><SubLast></SubLast></Col>
                
            </Row>

    </div>
            
    </>)
}
export default PeriodicADDvechicle;





