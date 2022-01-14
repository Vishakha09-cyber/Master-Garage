import React from "react";
// import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Link } from 'react-router-dom';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import './topnavbar.css';
import homeimg1 from '../../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';


function TopNavbar(){
 return<>
     <div className="nav-box">
             <Container>
                 <Row style={{display:'flex'}}>
                     <Col sm={4}>
                         <Row style={{display:'flex'}}>
                         <Col sm={6}><img style={{ height:'45px',padding: '10px'}}src={homeimg1}></img></Col>
                         <Col sm={6}>
                         <ul className="logo-name">
                             <li><Link to="#"><span>Mira Bhayander</span></Link></li>
                             <li><Link to="#"><span>Maharashtra, 401105</span></Link></li>
                         </ul>
                         </Col>       
                         </Row>
                     </Col>
                     <Col sm={4}>
                         <Row>
                             <ul>
                                 <li><Link to='#'>Home</Link></li>
                                 <li><Link to='#'>About Us</Link></li>
                                 <li><Link to='#'>Join Us</Link></li>
                                 <li><Link to='#'>Services</Link></li>
                                 <li><Link to='#'>FAQs</Link></li>
                                 <li><Link to='#'>Contact Us</Link></li>
                             </ul>
                         </Row>
                     </Col>
                     <Col sm={4}>
                         <Row>
                             <ul>
                                 <li></li>
                                 <li></li>
                                 <li></li>
                             </ul>
                         </Row>
                     </Col>
                 </Row>
             </Container>
     </div>
 </>
}
export default TopNavbar;