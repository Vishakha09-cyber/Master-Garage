import React from 'react';
import {CardBody,Input,Label, ButtonGroup,Card, Button,Row,Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import bluedot from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/bluedot.png';
import greendot from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/greendot.png';
import pickdrop from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/pickdrop.png';
import './chauffer.css'
const AddChauffer = () => {
  return ( 
        <Container fluid>
            <Row>
                <Col lg={8}>
                    <Card>
                        <div>
                            <p><i className="fas fa-map-marker-alt">Add Location Details</i></p> 
                                <div className="addchauffer">
                                <div>
                                    <p className="locationdot"><img src={bluedot} alt="error"/></p>
                                    <input type="text" className="picklocation form-control1" placeholder="Search"/>
                                </div>
                                <div className="pickdrop"><img src={pickdrop} alt="error"/></div>
                                <div>
                                    <p className="locationdot"><img src={greendot} alt="error"/></p>
                                    <input type="text" className="picklocation form-control1" placeholder="Search"/>
                                </div>
                            </div>
                        </div>
                    </Card>
           </Col>
           </Row>
        </Container>
  )
};

export default AddChauffer;
