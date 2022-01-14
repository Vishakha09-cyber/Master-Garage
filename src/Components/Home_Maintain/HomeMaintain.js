import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
//import img1 from '../../Images/img1.jpg';
//import rowicon1 from '../../Images/rowicon1.jpg';
import './homemaintain.css';

function HomeMaintenace(){
    return <>
    <div className="section1">
        <Container fluid>
            <Row className="row1">
                <Col sm={6}>
                    <Row>
                        <Col sm={6}><p className="text-1">Compare & Choose Schedule an appoitment Pay securely online.</p></Col>
                        <Col sm={6}>
                            <p className="text-2">What Services do you need?</p>
                            <p className="text-3">Compare estimates. Choose a shop. Schedule an appoitment. Pay securely online.</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}><img src="" ></img></Col>
            </Row>
            <Row>
                <SubHomeMain></SubHomeMain>
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
                            <Col sm={6}><img src="#" style={{width:'100px',height:'100px',paddingLeft:'20px'}}></img></Col>
                            <Col sm={6}><span style={{textAlign:'center'}}>Periodic 
                            Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src="#"></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src=""></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>
                        </Row>
                    </li>
                    <li>
                        <Row className="row-box">
                            <Col sm={6}><img src="#"></img></Col>
                            <Col sm={6}><span>Periodic Service</span></Col>

                        </Row>
                    </li>

                </ul>
            </Row>
        </Container>
    </>
}
export default HomeMaintenace;