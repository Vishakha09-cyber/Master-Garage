import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import homeimg1 from '../../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';

import './homemaintain.css';

function HomeMaintenace(){
    return <>
    <div className="section1">
        <Container >
            <Row className="row1">
                <Col sm={6}>
                    <Row>
                        <Col sm={6}><p className="text-1">Compare & Choose Schedule an appoitment Pay securely online.</p></Col>
                        <Col sm={6} style={{paddingTop:'40px'}}>
                            <p className="text-2">What Services do you need?</p>
                            <p className="text-3">Compare estimates. Choose a shop. Schedule an appoitment. Pay securely online.</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}><img src={homeimg1} style={{height:"450px",width:"620px",marginLeft:'20px',paddingLeft:'10px'}}></img></Col>
            </Row>
            <Row>
                <SubHomeMain></SubHomeMain>
            </Row>
            <Row>
                <Sectiontwo></Sectiontwo>
            </Row>
        </Container>
    </div>

    </>
}
function Sectiontwo(){
    return<>
        <div className>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div>
                             <i class="fas fa-hand-point-up"></i>
                            <span>Compare & Choose</span>
                            <p>Users can compare and choose the garage on basis of different parameters like distance price & rating</p>
                        </div>
                    </Col>
                    <Col sm={4}></Col>
                    <Col sm={4}></Col>
                </Row>
               
            </Container>

        </div>
    </>
}
function SubHomeMain(){
    return<>
        <Container>
            <Row>
                <ul className="row2">
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src={homeimg1} style={{width:'80px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span style={{textAlign:'center'}}>Periodic 
                            Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src={homeimg1} style={{width:'80px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src={homeimg1} style={{width:'80px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src={homeimg1} style={{width:'80px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src={homeimg1} style={{width:'80px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src={homeimg1} style={{width:'80px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src={homeimg1} style={{width:'80px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src={homeimg1} style={{width:'80px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src={homeimg1} style={{width:'80px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>

                </ul>
            </Row>
        </Container>
    </>
}
export default HomeMaintenace;