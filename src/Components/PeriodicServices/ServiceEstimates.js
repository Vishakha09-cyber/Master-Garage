import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';

import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import Cartisan from '../../Images/ImagesAll/drawable-xxxhdpi/Cartisan.png';
import Castrol from '../../Images/ImagesAll/drawable-xxxhdpi/Castrol.png';
import BKakaako from '../../Images/ImagesAll/drawable-xxxhdpi/BKakaako.png';
import Garage from '../../Images/ImagesAll/drawable-xxxhdpi/CKakaako.png';
import CKakaako from '../../Images/ImagesAll/drawable-xxxhdpi/CKakaako.png';


function ServiceEstimates(){
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
export default ServiceEstimates;


const SubLast = () => (
    <>
            
        
        <div class="boxlast">
        <Row className='py-2'>
            <Col sm={1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="53" viewBox="0 0 50 53">
  <g id="Group_29758" data-name="Group 29758" transform="translate(-903 -110)">
    <path id="Rectangle_9500" data-name="Rectangle 9500" d="M0,0H40A10,10,0,0,1,50,10V43A10,10,0,0,1,40,53H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(903 110)" fill="#f4f8ff"/>
    <g id="Group_29754" data-name="Group 29754" transform="translate(915 124.001)">
      <path id="Path_31096" data-name="Path 31096" d="M25.729,3.131H17.247a4.033,4.033,0,0,0-7.862,0H.9a.9.9,0,1,0,0,1.808H9.386a4.032,4.032,0,0,0,7.861,0h8.482a.9.9,0,1,0,0-1.808ZM13.316,6.262a2.227,2.227,0,1,1,2.217-2.339.832.832,0,0,0-.011.112,1.017,1.017,0,0,0,.011.111A2.225,2.225,0,0,1,13.316,6.262Z" transform="translate(0 0)" fill="#2650d8"/>
      <path id="Path_31097" data-name="Path 31097" d="M25.729,16.347H23.841a4.033,4.033,0,0,0-7.862,0H.9a.9.9,0,1,0,0,1.808H15.979a4.032,4.032,0,0,0,7.861,0h1.889a.9.9,0,1,0,0-1.808ZM19.91,19.478a2.227,2.227,0,1,1,2.228-2.229A2.231,2.231,0,0,1,19.91,19.478Z" transform="translate(0 3.957)" fill="#2650d8"/>
      <path id="Path_31098" data-name="Path 31098" d="M25.729,9.739H10.654a4.033,4.033,0,0,0-7.862,0H.9a.9.9,0,1,0,0,1.808H2.793a4.032,4.032,0,0,0,7.861,0H25.729a.9.9,0,1,0,0-1.808ZM6.723,12.87a2.227,2.227,0,1,1,2.228-2.229A2.231,2.231,0,0,1,6.723,12.87Z" transform="translate(0 1.978)" fill="#2650d8"/>
    </g>
  </g>
</svg>


            </Col>
            <Col sm={9}>
            <Row className=' m-1'>
       
       <Col sm={9}><p style={{marginBottom:'0px'}} className='poppins20B'>MH 01 AB 3827 <span className='poppins18' style={{fontSize:'13px'}}><Link to ="">Change</Link></span></p><p className='poppins15light'>Maruti Suzuki XL6</p>
       
       </Col>
       <Col sm={3}><img src={Venue} style={{height:'50px',width:'40px;',marginBottom:'20px'}}></img></Col>
       
       </Row>
            </Col>
            <Col sm={1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="53" viewBox="0 0 50 53">
  <g id="Group_29761" data-name="Group 29761" transform="translate(-1339 -110)">
    <g id="Group_29761-2" data-name="Group 29761" transform="translate(1339 110)">
      <path id="Rectangle_9500" data-name="Rectangle 9500" d="M10,0H50a0,0,0,0,1,0,0V53a0,0,0,0,1,0,0H10A10,10,0,0,1,0,43V10A10,10,0,0,1,10,0Z" fill="#f4f8ff"/>
    </g>
    <path id="Path_22578" data-name="Path 22578" d="M127.438,47.181a12.014,12.014,0,0,0-16.991,16.991l7.461,7.476a1.423,1.423,0,0,0,.462.31,1.409,1.409,0,0,0,.544.109,1.414,1.414,0,0,0,1.006-.419l7.518-7.547a11.966,11.966,0,0,0,0-16.92Zm-2.025,14.9-6.47,6.5-6.472-6.5a9.147,9.147,0,1,1,12.942,0ZM114.7,51.329a6.108,6.108,0,1,0,10.42,4.389,5.993,5.993,0,0,0-1.784-4.319,6.086,6.086,0,0,0-8.636-.071Zm6.64,6.626a1.364,1.364,0,1,0-.071,0Z" transform="translate(1245.064 78.635)" fill="#2650d8"/>
  </g>
</svg>

            </Col>
        </Row>
        <div className='scrollbox px-2 '>
            <div className='addbg px-2 my-2'>
            <Row >
            <Col sm={3}>
                <div>
                <svg id="Group_29648" data-name="Group 29648" xmlns="http://www.w3.org/2000/svg" width="100.009" height="36.291" style={{position:'relative',zIndex:'99',left:'-7px'}} viewBox="0 0 100.009 36.291">
  <path id="Path_31109" data-name="Path 31109" d="M709,441.486s-8-17.989-8-21.986h8Z" transform="translate(-701 -405.195)" fill="#3700b3"/>
  <rect id="Rectangle_9497" data-name="Rectangle 9497" width="100" height="20" rx="5" transform="translate(0.009)" fill="#2650d8"/>
  <text id="Recommended" transform="translate(11.009 14)" fill="#fff" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Recommended</tspan></text>
</svg>
 <img src={FirstChoice} style={{width:'100px',height:'100px',position:'absolute',marginTop:'-37px'}}></img>

                </div>
                   
            </Col>
            <Col sm={9} className='px-3'>
                    <Link to="/BookGarage" style={{textDecoration:'none'}}><p className='poppins18B'>Mahindra First FirstChoice</p></Link>
                    <Row><Col sm={6}>

                            <p className='poppins15R'> 13 min away</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="15" viewBox="0 0 103 15">
  <g id="Group_29651" data-name="Group 29651" transform="translate(0.005)">
    <path id="Polygon_64" data-name="Polygon 64" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(-0.005)" fill="#f90"/>
    <path id="Polygon_65" data-name="Polygon 65" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(21.995)" fill="#f90"/>
    <path id="Polygon_66" data-name="Polygon 66" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(65.995)" fill="#f90"/>
    <path id="Polygon_67" data-name="Polygon 67" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(87.995)" fill="#f90"/>
    <path id="Polygon_68" data-name="Polygon 68" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(43.995)" fill="#f90"/>
  </g>
</svg>

                    </Col>
                    <Col sm={6} className='py-2 px-2'><svg xmlns="http://www.w3.org/2000/svg" width="137.313" height="24" viewBox="0 0 137.313 24">
  <g id="Group_29653" data-name="Group 29653" transform="translate(-1221.205 -240)">
    <text id="_6459" data-name="₹ 6459" transform="translate(1274 259)" fill="#2650d8" font-size="18" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">₹ 6459</tspan></text>
    <g id="Group_29652" data-name="Group 29652" transform="translate(1340.009 242.5)">
      <g id="Group_30240" data-name="Group 30240">
        <path id="Path_31110" data-name="Path 31110" d="M1314.085,666.833a8.75,8.75,0,1,0-8.755-8.749A8.755,8.755,0,0,0,1314.085,666.833Z" transform="translate(-1305.33 -649.332)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_31111" data-name="Path 31111" d="M1312,659.5V656" transform="translate(-1303.245 -647.25)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_31112" data-name="Path 31112" d="M1312,653.333h.013" transform="translate(-1303.245 -648.082)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
    </g>
    <g id="Group_30254" data-name="Group 30254" transform="translate(1221.205 240)">
      <path id="Path_15024" data-name="Path 15024" d="M3806.828-875.28c-.084.633-.151,1.27-.259,1.9a15.377,15.377,0,0,1-1.687,4.827.359.359,0,0,1-.265.151c-.9.011-1.79.007-2.684.005a.391.391,0,0,1-.185-.024c-.72-.41-1.437-.825-2.168-1.248.327-.571.643-1.115.972-1.686l2.825,1.623a13.844,13.844,0,0,0,1.513-7.722l-3.364.585c-.113-.644-.223-1.27-.336-1.918l3.417-.606a14.328,14.328,0,0,0-3.9-7c-.773.92-1.538,1.831-2.322,2.762l-1.494-1.251c.78-.93,1.545-1.845,2.333-2.785a14.267,14.267,0,0,0-7.595-2.827v3.686H3789.7v-3.684a14.242,14.242,0,0,0-7.6,2.824c.782.934,1.548,1.849,2.333,2.785-.5.419-.979.822-1.493,1.252l-2.32-2.76a14.343,14.343,0,0,0-3.9,7l3.417.609c-.111.64-.218,1.265-.332,1.917l-3.379-.588a14.207,14.207,0,0,0,1.509,7.734l2.839-1.633c.327.565.642,1.108.974,1.683-.479.279-.965.528-1.414.83a2.579,2.579,0,0,1-1.686.456c-.629-.043-1.263-.015-1.893-.005a.329.329,0,0,1-.345-.2,15.781,15.781,0,0,1-1.858-8.766,15.855,15.855,0,0,1,7.682-12.66,14.85,14.85,0,0,1,6.5-2.252,15.8,15.8,0,0,1,13.285,4.552,15.6,15.6,0,0,1,4.691,9.581c.039.321.08.641.119.962Z" transform="translate(-3774.502 892.379)" fill="#53bd8c"/>
      <path id="Path_15025" data-name="Path 15025" d="M3928.544-585.58v3.084H3915.4v-3.084Z" transform="translate(-3905.81 606.462)" fill="#53bd8c"/>
      <path id="Path_15026" data-name="Path 15026" d="M.039,0C.146.077.252.154.357.232Q2.974,2.156,5.592,4.075a1.007,1.007,0,0,0,.392.166,1.321,1.321,0,0,1-.09,2.624A1.33,1.33,0,0,1,4.5,5.828,1.186,1.186,0,0,0,4.3,5.417Q2.23,2.83.153.253C.1.187.05.12,0,.053Z" transform="translate(22.552 11.736) rotate(90)" fill="#53bd8c"/>
    </g>
  </g>
</svg>
</Col></Row>
                    
            </Col>
            <Row className='py-3'>
            <p style={{float:'left'}}><svg xmlns="http://www.w3.org/2000/svg" width="180.493" height="17" viewBox="0 0 180.493 17">
  <g id="Group_29655" data-name="Group 29655" transform="translate(-85.507 -976)">
    <text id="_50_Off_I_Use_Code:_TRYNEW" data-name="50% Off I Use Code: TRYNEW" transform="translate(110 989)" fill="#b92100" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">50% Off I Use Code: TRYNEW</tspan></text>
    <g id="Group_29654" data-name="Group 29654" transform="translate(-343 342)">
      <path id="Path_31113" data-name="Path 31113" d="M443.93,642.72a.5.5,0,0,1,0-.44l.634-1.3a1.476,1.476,0,0,0-.637-1.96l-1.275-.677a.5.5,0,0,1-.259-.356l-.249-1.422a1.477,1.477,0,0,0-1.668-1.211l-1.429.2a.5.5,0,0,1-.419-.136l-1.038-1a1.476,1.476,0,0,0-2.06,0l-1.038,1a.494.494,0,0,1-.418.136l-1.43-.2a1.476,1.476,0,0,0-1.667,1.211l-.25,1.422a.5.5,0,0,1-.258.356l-1.276.677a1.476,1.476,0,0,0-.637,1.959l.634,1.3a.494.494,0,0,1,0,.44l-.634,1.3a1.477,1.477,0,0,0,.637,1.96l1.276.677a.5.5,0,0,1,.258.356l.25,1.422a1.472,1.472,0,0,0,1.454,1.226,1.5,1.5,0,0,0,.213-.015l1.43-.2a.5.5,0,0,1,.418.136l1.038,1a1.476,1.476,0,0,0,2.06,0l1.038-1a.5.5,0,0,1,.419-.136l1.429.2a1.477,1.477,0,0,0,1.668-1.211l.249-1.422a.5.5,0,0,1,.259-.356l1.275-.677a1.476,1.476,0,0,0,.637-1.96Zm-9.33-4.632a1.8,1.8,0,1,1-1.8,1.8A1.8,1.8,0,0,1,434.6,638.088Zm-.927,7.994a.49.49,0,0,1-.694-.693l6.471-6.471a.49.49,0,0,1,.693.693Zm4.849.831a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,438.522,646.912Z" transform="translate(0.101 0)" fill="#b92100"/>
    </g>
  </g>
</svg></p>
            </Row>
            
            

        </Row>
            </div>
        
            <div className='addbg px-2 my-2'>
            <Row >
            <Col sm={3}>
                <div>
                <svg id="Group_29659" data-name="Group 29659" xmlns="http://www.w3.org/2000/svg" width="45.009" height="36.291" style={{position:'relative',zIndex:'99',left:'-7px'}} viewBox="0 0 45.009 36.291">
  <path id="Path_31115" data-name="Path 31115" d="M709,441.486s-8-17.989-8-21.986h8Z" transform="translate(-701 -405.195)" fill="#b92100"/>
  <rect id="Rectangle_9498" data-name="Rectangle 9498" width="45" height="20" rx="5" transform="translate(0.009)" fill="#ed7d2b"/>
  <text id="NEW" transform="translate(11.009 14)" fill="#fff" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">NEW</tspan></text>
</svg>

 <img src={Cartisan} style={{width:'100px',height:'100px',position:'absolute',marginLeft:'-44px'}}></img>

                </div>
                   
            </Col>
            <Col sm={9} className='px-3'>
                    <p className='poppins18B'>Cartisan Service</p>
                    <Row><Col sm={6}>

                            <p className='poppins15R'> 13 min away</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="15" viewBox="0 0 103 15">
  <g id="Group_29651" data-name="Group 29651" transform="translate(0.005)">
    <path id="Polygon_64" data-name="Polygon 64" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(-0.005)" fill="#f90"/>
    <path id="Polygon_65" data-name="Polygon 65" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(21.995)" fill="#f90"/>
    <path id="Polygon_66" data-name="Polygon 66" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(65.995)" fill="#f90"/>
    <path id="Polygon_67" data-name="Polygon 67" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(87.995)" fill="#f90"/>
    <path id="Polygon_68" data-name="Polygon 68" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(43.995)" fill="#f90"/>
  </g>
</svg>

                    </Col>
                    <Col sm={6} className='py-2 px-2'><svg xmlns="http://www.w3.org/2000/svg" width="137.313" height="24" viewBox="0 0 137.313 24">
  <g id="Group_29653" data-name="Group 29653" transform="translate(-1221.205 -240)">
    <text id="_6459" data-name="₹ 6459" transform="translate(1274 259)" fill="#2650d8" font-size="18" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">₹ 7500</tspan></text>
    <g id="Group_29652" data-name="Group 29652" transform="translate(1340.009 242.5)">
      <g id="Group_30240" data-name="Group 30240">
        <path id="Path_31110" data-name="Path 31110" d="M1314.085,666.833a8.75,8.75,0,1,0-8.755-8.749A8.755,8.755,0,0,0,1314.085,666.833Z" transform="translate(-1305.33 -649.332)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_31111" data-name="Path 31111" d="M1312,659.5V656" transform="translate(-1303.245 -647.25)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_31112" data-name="Path 31112" d="M1312,653.333h.013" transform="translate(-1303.245 -648.082)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
    </g>
    <g id="Group_30254" data-name="Group 30254" transform="translate(1221.205 240)">
      <path id="Path_15024" data-name="Path 15024" d="M3806.828-875.28c-.084.633-.151,1.27-.259,1.9a15.377,15.377,0,0,1-1.687,4.827.359.359,0,0,1-.265.151c-.9.011-1.79.007-2.684.005a.391.391,0,0,1-.185-.024c-.72-.41-1.437-.825-2.168-1.248.327-.571.643-1.115.972-1.686l2.825,1.623a13.844,13.844,0,0,0,1.513-7.722l-3.364.585c-.113-.644-.223-1.27-.336-1.918l3.417-.606a14.328,14.328,0,0,0-3.9-7c-.773.92-1.538,1.831-2.322,2.762l-1.494-1.251c.78-.93,1.545-1.845,2.333-2.785a14.267,14.267,0,0,0-7.595-2.827v3.686H3789.7v-3.684a14.242,14.242,0,0,0-7.6,2.824c.782.934,1.548,1.849,2.333,2.785-.5.419-.979.822-1.493,1.252l-2.32-2.76a14.343,14.343,0,0,0-3.9,7l3.417.609c-.111.64-.218,1.265-.332,1.917l-3.379-.588a14.207,14.207,0,0,0,1.509,7.734l2.839-1.633c.327.565.642,1.108.974,1.683-.479.279-.965.528-1.414.83a2.579,2.579,0,0,1-1.686.456c-.629-.043-1.263-.015-1.893-.005a.329.329,0,0,1-.345-.2,15.781,15.781,0,0,1-1.858-8.766,15.855,15.855,0,0,1,7.682-12.66,14.85,14.85,0,0,1,6.5-2.252,15.8,15.8,0,0,1,13.285,4.552,15.6,15.6,0,0,1,4.691,9.581c.039.321.08.641.119.962Z" transform="translate(-3774.502 892.379)" fill="#53bd8c"/>
      <path id="Path_15025" data-name="Path 15025" d="M3928.544-585.58v3.084H3915.4v-3.084Z" transform="translate(-3905.81 606.462)" fill="#53bd8c"/>
      <path id="Path_15026" data-name="Path 15026" d="M.039,0C.146.077.252.154.357.232Q2.974,2.156,5.592,4.075a1.007,1.007,0,0,0,.392.166,1.321,1.321,0,0,1-.09,2.624A1.33,1.33,0,0,1,4.5,5.828,1.186,1.186,0,0,0,4.3,5.417Q2.23,2.83.153.253C.1.187.05.12,0,.053Z" transform="translate(22.552 11.736) rotate(90)" fill="#53bd8c"/>
    </g>
  </g>
</svg>
</Col></Row>
                    
            </Col>
            <Row className='py-3'>
            <p style={{float:'left'}}><svg xmlns="http://www.w3.org/2000/svg" width="180.493" height="17" viewBox="0 0 180.493 17">
  <g id="Group_29655" data-name="Group 29655" transform="translate(-85.507 -976)">
    <text id="_50_Off_I_Use_Code:_TRYNEW" data-name="50% Off I Use Code: TRYNEW" transform="translate(110 989)" fill="#b92100" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">50% Off I Use Code: TRYNEW</tspan></text>
    <g id="Group_29654" data-name="Group 29654" transform="translate(-343 342)">
      <path id="Path_31113" data-name="Path 31113" d="M443.93,642.72a.5.5,0,0,1,0-.44l.634-1.3a1.476,1.476,0,0,0-.637-1.96l-1.275-.677a.5.5,0,0,1-.259-.356l-.249-1.422a1.477,1.477,0,0,0-1.668-1.211l-1.429.2a.5.5,0,0,1-.419-.136l-1.038-1a1.476,1.476,0,0,0-2.06,0l-1.038,1a.494.494,0,0,1-.418.136l-1.43-.2a1.476,1.476,0,0,0-1.667,1.211l-.25,1.422a.5.5,0,0,1-.258.356l-1.276.677a1.476,1.476,0,0,0-.637,1.959l.634,1.3a.494.494,0,0,1,0,.44l-.634,1.3a1.477,1.477,0,0,0,.637,1.96l1.276.677a.5.5,0,0,1,.258.356l.25,1.422a1.472,1.472,0,0,0,1.454,1.226,1.5,1.5,0,0,0,.213-.015l1.43-.2a.5.5,0,0,1,.418.136l1.038,1a1.476,1.476,0,0,0,2.06,0l1.038-1a.5.5,0,0,1,.419-.136l1.429.2a1.477,1.477,0,0,0,1.668-1.211l.249-1.422a.5.5,0,0,1,.259-.356l1.275-.677a1.476,1.476,0,0,0,.637-1.96Zm-9.33-4.632a1.8,1.8,0,1,1-1.8,1.8A1.8,1.8,0,0,1,434.6,638.088Zm-.927,7.994a.49.49,0,0,1-.694-.693l6.471-6.471a.49.49,0,0,1,.693.693Zm4.849.831a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,438.522,646.912Z" transform="translate(0.101 0)" fill="#b92100"/>
    </g>
  </g>
</svg></p>
            </Row>
            
            

        </Row>
            </div>
            <div className='addbg px-2'>
            <Row >
            <Col sm={3}>
                <div>
                
 <img src={Castrol} style={{width:'100px',height:'100px'}}></img>

                </div>
                   
            </Col>
            <Col sm={9} className='px-3'>
                    <p className='poppins18B'>Castrol Service</p>
                    <Row><Col sm={6}>

                            <p className='poppins15R'> 13 min away</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="15" viewBox="0 0 103 15">
  <g id="Group_29651" data-name="Group 29651" transform="translate(0.005)">
    <path id="Polygon_64" data-name="Polygon 64" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(-0.005)" fill="#f90"/>
    <path id="Polygon_65" data-name="Polygon 65" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(21.995)" fill="#f90"/>
    <path id="Polygon_66" data-name="Polygon 66" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(65.995)" fill="#f90"/>
    <path id="Polygon_67" data-name="Polygon 67" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(87.995)" fill="#f90"/>
    <path id="Polygon_68" data-name="Polygon 68" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(43.995)" fill="#f90"/>
  </g>
</svg>

                    </Col>
                    <Col sm={6} className='py-2 px-2'><svg xmlns="http://www.w3.org/2000/svg" width="136.844" height="24" viewBox="0 0 136.844 24">
  <g id="Group_29670" data-name="Group 29670" transform="translate(-1221.674 -239)">
    <text id="_8000" data-name="₹ 8000" transform="translate(1274 258)" fill="#2650d8" font-size="18" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">₹ 8000</tspan></text>
    <g id="Group_29669" data-name="Group 29669" transform="translate(1340.009 242.5)">
      <path id="Path_31121" data-name="Path 31121" d="M1314.085,666.833a8.75,8.75,0,1,0-8.755-8.749A8.755,8.755,0,0,0,1314.085,666.833Z" transform="translate(-1305.33 -649.333)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <path id="Path_31122" data-name="Path 31122" d="M1312,659.5V656" transform="translate(-1303.245 -647.249)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <path id="Path_31123" data-name="Path 31123" d="M1312,653.333h.013" transform="translate(-1303.245 -648.083)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <g id="Group_30247" data-name="Group 30247" transform="translate(1221.675 239)">
      <path id="Path_15024" data-name="Path 15024" d="M3806.827-875.279c-.085.633-.15,1.27-.259,1.9a15.389,15.389,0,0,1-1.688,4.827.358.358,0,0,1-.265.151c-.9.011-1.79.007-2.684.005a.388.388,0,0,1-.184-.024c-.721-.41-1.438-.825-2.169-1.249.327-.571.642-1.115.972-1.686l2.824,1.624a13.844,13.844,0,0,0,1.513-7.722l-3.364.585c-.112-.644-.223-1.269-.336-1.918l3.417-.606a14.331,14.331,0,0,0-3.9-7c-.773.92-1.538,1.831-2.322,2.762-.5-.423-.985-.826-1.494-1.251.78-.93,1.546-1.845,2.334-2.785a14.267,14.267,0,0,0-7.595-2.827v3.686H3789.7v-3.684a14.243,14.243,0,0,0-7.6,2.824l2.334,2.785c-.5.419-.98.823-1.494,1.252-.772-.921-1.533-1.826-2.32-2.76a14.349,14.349,0,0,0-3.9,7l3.418.609c-.111.64-.219,1.265-.332,1.917l-3.379-.588a14.19,14.19,0,0,0,1.51,7.734l2.837-1.633c.327.565.643,1.109.975,1.683-.479.279-.965.528-1.414.831a2.579,2.579,0,0,1-1.686.456c-.629-.043-1.263-.016-1.893-.005a.327.327,0,0,1-.344-.2,15.778,15.778,0,0,1-1.859-8.765,15.853,15.853,0,0,1,7.682-12.659,14.846,14.846,0,0,1,6.5-2.252,15.8,15.8,0,0,1,13.286,4.552,15.594,15.594,0,0,1,4.691,9.581c.038.32.079.641.119.961Z" transform="translate(-3774.502 892.379)" fill="#ed7d2b"/>
      <path id="Path_15025" data-name="Path 15025" d="M3928.543-585.58v3.084H3915.4v-3.084Z" transform="translate(-3905.809 606.462)" fill="#ed7d2b"/>
      <path id="Path_15026" data-name="Path 15026" d="M.039,0C.145.077.252.154.357.232Q2.973,2.156,5.591,4.075a1.012,1.012,0,0,0,.392.166A1.345,1.345,0,0,1,7.113,5.6a1.32,1.32,0,0,1-2.61.232A1.184,1.184,0,0,0,4.3,5.417Q2.229,2.83.152.253C.1.187.05.12,0,.053Z" transform="translate(11.629 11.603) rotate(7)" fill="#ed7d2b"/>
    </g>
  </g>
</svg>

</Col></Row>
                    
            </Col>
            <Row className='py-3'>
            <p style={{float:'left'}}><svg xmlns="http://www.w3.org/2000/svg" width="180.493" height="17" viewBox="0 0 180.493 17">
  <g id="Group_29655" data-name="Group 29655" transform="translate(-85.507 -976)">
    <text id="_50_Off_I_Use_Code:_TRYNEW" data-name="50% Off I Use Code: TRYNEW" transform="translate(110 989)" fill="#b92100" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">50% Off I Use Code: TRYNEW</tspan></text>
    <g id="Group_29654" data-name="Group 29654" transform="translate(-343 342)">
      <path id="Path_31113" data-name="Path 31113" d="M443.93,642.72a.5.5,0,0,1,0-.44l.634-1.3a1.476,1.476,0,0,0-.637-1.96l-1.275-.677a.5.5,0,0,1-.259-.356l-.249-1.422a1.477,1.477,0,0,0-1.668-1.211l-1.429.2a.5.5,0,0,1-.419-.136l-1.038-1a1.476,1.476,0,0,0-2.06,0l-1.038,1a.494.494,0,0,1-.418.136l-1.43-.2a1.476,1.476,0,0,0-1.667,1.211l-.25,1.422a.5.5,0,0,1-.258.356l-1.276.677a1.476,1.476,0,0,0-.637,1.959l.634,1.3a.494.494,0,0,1,0,.44l-.634,1.3a1.477,1.477,0,0,0,.637,1.96l1.276.677a.5.5,0,0,1,.258.356l.25,1.422a1.472,1.472,0,0,0,1.454,1.226,1.5,1.5,0,0,0,.213-.015l1.43-.2a.5.5,0,0,1,.418.136l1.038,1a1.476,1.476,0,0,0,2.06,0l1.038-1a.5.5,0,0,1,.419-.136l1.429.2a1.477,1.477,0,0,0,1.668-1.211l.249-1.422a.5.5,0,0,1,.259-.356l1.275-.677a1.476,1.476,0,0,0,.637-1.96Zm-9.33-4.632a1.8,1.8,0,1,1-1.8,1.8A1.8,1.8,0,0,1,434.6,638.088Zm-.927,7.994a.49.49,0,0,1-.694-.693l6.471-6.471a.49.49,0,0,1,.693.693Zm4.849.831a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,438.522,646.912Z" transform="translate(0.101 0)" fill="#b92100"/>
    </g>
  </g>
</svg></p>
            </Row>
            
            

        </Row>
            </div>
            <div className='addbg px-2'>
            <Row >
            <Col sm={3}>
                <div>
                
 <img src={BKakaako} style={{width:'100px',height:'100px'}}></img>

                </div>
                   
            </Col>
            <Col sm={9} className='px-3'>
                    <p className='poppins18B'>The Garage Kakaako</p>
                    <Row><Col sm={6}>

                            <p className='poppins15R'> 13 min away</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="15" viewBox="0 0 103 15">
  <g id="Group_29651" data-name="Group 29651" transform="translate(0.005)">
    <path id="Polygon_64" data-name="Polygon 64" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(-0.005)" fill="#f90"/>
    <path id="Polygon_65" data-name="Polygon 65" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(21.995)" fill="#f90"/>
    <path id="Polygon_66" data-name="Polygon 66" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(65.995)" fill="#f90"/>
    <path id="Polygon_67" data-name="Polygon 67" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(87.995)" fill="#f90"/>
    <path id="Polygon_68" data-name="Polygon 68" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(43.995)" fill="#f90"/>
  </g>
</svg>

                    </Col>
                    <Col sm={6} className='py-2 px-2'><svg xmlns="http://www.w3.org/2000/svg" width="136.844" height="24" viewBox="0 0 136.844 24">
  <g id="Group_29670" data-name="Group 29670" transform="translate(-1221.674 -239)">
    <text id="_8000" data-name="₹ 8000" transform="translate(1274 258)" fill="#2650d8" font-size="18" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">₹ 9459</tspan></text>
    <g id="Group_29669" data-name="Group 29669" transform="translate(1340.009 242.5)">
      <path id="Path_31121" data-name="Path 31121" d="M1314.085,666.833a8.75,8.75,0,1,0-8.755-8.749A8.755,8.755,0,0,0,1314.085,666.833Z" transform="translate(-1305.33 -649.333)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <path id="Path_31122" data-name="Path 31122" d="M1312,659.5V656" transform="translate(-1303.245 -647.249)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <path id="Path_31123" data-name="Path 31123" d="M1312,653.333h.013" transform="translate(-1303.245 -648.083)" fill="none" stroke="#2650d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <g id="Group_30247" data-name="Group 30247" transform="translate(1221.675 239)">
      <path id="Path_15024" data-name="Path 15024" d="M3806.827-875.279c-.085.633-.15,1.27-.259,1.9a15.389,15.389,0,0,1-1.688,4.827.358.358,0,0,1-.265.151c-.9.011-1.79.007-2.684.005a.388.388,0,0,1-.184-.024c-.721-.41-1.438-.825-2.169-1.249.327-.571.642-1.115.972-1.686l2.824,1.624a13.844,13.844,0,0,0,1.513-7.722l-3.364.585c-.112-.644-.223-1.269-.336-1.918l3.417-.606a14.331,14.331,0,0,0-3.9-7c-.773.92-1.538,1.831-2.322,2.762-.5-.423-.985-.826-1.494-1.251.78-.93,1.546-1.845,2.334-2.785a14.267,14.267,0,0,0-7.595-2.827v3.686H3789.7v-3.684a14.243,14.243,0,0,0-7.6,2.824l2.334,2.785c-.5.419-.98.823-1.494,1.252-.772-.921-1.533-1.826-2.32-2.76a14.349,14.349,0,0,0-3.9,7l3.418.609c-.111.64-.219,1.265-.332,1.917l-3.379-.588a14.19,14.19,0,0,0,1.51,7.734l2.837-1.633c.327.565.643,1.109.975,1.683-.479.279-.965.528-1.414.831a2.579,2.579,0,0,1-1.686.456c-.629-.043-1.263-.016-1.893-.005a.327.327,0,0,1-.344-.2,15.778,15.778,0,0,1-1.859-8.765,15.853,15.853,0,0,1,7.682-12.659,14.846,14.846,0,0,1,6.5-2.252,15.8,15.8,0,0,1,13.286,4.552,15.594,15.594,0,0,1,4.691,9.581c.038.32.079.641.119.961Z" transform="translate(-3774.502 892.379)" fill="#ed7d2b"/>
      <path id="Path_15025" data-name="Path 15025" d="M3928.543-585.58v3.084H3915.4v-3.084Z" transform="translate(-3905.809 606.462)" fill="#ed7d2b"/>
      <path id="Path_15026" data-name="Path 15026" d="M.039,0C.145.077.252.154.357.232Q2.973,2.156,5.591,4.075a1.012,1.012,0,0,0,.392.166A1.345,1.345,0,0,1,7.113,5.6a1.32,1.32,0,0,1-2.61.232A1.184,1.184,0,0,0,4.3,5.417Q2.229,2.83.152.253C.1.187.05.12,0,.053Z" transform="translate(11.629 11.603) rotate(7)" fill="#ed7d2b"/>
    </g>
  </g>
</svg>

</Col></Row>
                    
            </Col>
            <Row className='py-3'>
            <p style={{float:'left'}}><svg xmlns="http://www.w3.org/2000/svg" width="180.493" height="17" viewBox="0 0 180.493 17">
  <g id="Group_29655" data-name="Group 29655" transform="translate(-85.507 -976)">
    <text id="_50_Off_I_Use_Code:_TRYNEW" data-name="50% Off I Use Code: TRYNEW" transform="translate(110 989)" fill="#b92100" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">50% Off I Use Code: TRYNEW</tspan></text>
    <g id="Group_29654" data-name="Group 29654" transform="translate(-343 342)">
      <path id="Path_31113" data-name="Path 31113" d="M443.93,642.72a.5.5,0,0,1,0-.44l.634-1.3a1.476,1.476,0,0,0-.637-1.96l-1.275-.677a.5.5,0,0,1-.259-.356l-.249-1.422a1.477,1.477,0,0,0-1.668-1.211l-1.429.2a.5.5,0,0,1-.419-.136l-1.038-1a1.476,1.476,0,0,0-2.06,0l-1.038,1a.494.494,0,0,1-.418.136l-1.43-.2a1.476,1.476,0,0,0-1.667,1.211l-.25,1.422a.5.5,0,0,1-.258.356l-1.276.677a1.476,1.476,0,0,0-.637,1.959l.634,1.3a.494.494,0,0,1,0,.44l-.634,1.3a1.477,1.477,0,0,0,.637,1.96l1.276.677a.5.5,0,0,1,.258.356l.25,1.422a1.472,1.472,0,0,0,1.454,1.226,1.5,1.5,0,0,0,.213-.015l1.43-.2a.5.5,0,0,1,.418.136l1.038,1a1.476,1.476,0,0,0,2.06,0l1.038-1a.5.5,0,0,1,.419-.136l1.429.2a1.477,1.477,0,0,0,1.668-1.211l.249-1.422a.5.5,0,0,1,.259-.356l1.275-.677a1.476,1.476,0,0,0,.637-1.96Zm-9.33-4.632a1.8,1.8,0,1,1-1.8,1.8A1.8,1.8,0,0,1,434.6,638.088Zm-.927,7.994a.49.49,0,0,1-.694-.693l6.471-6.471a.49.49,0,0,1,.693.693Zm4.849.831a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,438.522,646.912Z" transform="translate(0.101 0)" fill="#b92100"/>
    </g>
  </g>
</svg></p>
            </Row>
            
            

        </Row>
            </div>
        </div>
        

        
        </div>
    </>
);


