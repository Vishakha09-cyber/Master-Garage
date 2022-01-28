import React from 'react';
import './homemaintain.css';
import { Link } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
//import homeimg1 from '../../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';
import homeimg1 from '../../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';
import SettingSeaGreen from '../../Images/ImagesAll/drawable-xxxhdpi/SettingSeaGreen.png';
import SmilePurpule from '../../Images/ImagesAll/drawable-xxxhdpi/SmilePurpule.png';
import PeoplesRed from '../../Images/ImagesAll/drawable-xxxhdpi/PeoplesRed.png';
import HeartBlue from '../../Images/ImagesAll/drawable-xxxhdpi/HeartBlue.png';


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
                    <div className='rowbox py-5'>
                      <Link to="/HomeMain1" style={{textDecoration:'none'}}>
                        <div className='firsth1'>
                        <img src={SettingSeaGreen} style={{width:'100px',height:'100px'}}></img><br></br>
                        <span className='head1'>One Stop Solution</span>
                        <p className='shortpara'>Compare, Choose & Book what fits your needs</p>
                    
                        </div>   
                      </Link>  
                    </div>
                </Col>
                <Col sm={3}> 
                <div className='rowbox py-5'>
                <div className='firsth1'>
                <img src={SmilePurpule} style={{width:'100px',height:'100px'}}></img><br></br>
                        <span  className='head1'>Peace of Mind</span>
                        <p className='shortpara' >Quality Service, Secure Payment and rooust customer support</p>
                        </div> 
                    </div></Col>
                <Col sm={3}>
                <div className='rowbox py-5'>
                <div className='firsth1'>
                <img src={HeartBlue} style={{width:'100px',height:'100px'}}></img><br></br>
                        <span  className='head1'>Freedom of Choice</span>
                        <p className='shortpara'>Compare, Choose & Book what fits your needs</p>
                        </div> 
                    </div>
                </Col>
                <Col sm={3}>
                <div className='rowbox py-5'>
                <div className='firsth1'>
                <img src={PeoplesRed} style={{width:'100px',height:'100px'}}></img><br></br>
                        <span  className='head1'>Trusted Partners</span>
                        <p className='shortpara'>100% genuine and trusted service providers nearby</p>
                        </div> 
                    </div>
                </Col>
            </Row>
        </div>
    </>
}

