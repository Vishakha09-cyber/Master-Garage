import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import cardescription from '../../Images/ImagesAll/drawable-hdpi/cardescription.png'
import JobCar from './JobCar';
import carfront from '../../Images/frontcar.jpg';
import carleft from '../../Images/leftcar.jpg'
import carright from '../../Images/rightcar.jpg'
import backcar from '../../Images/backcar.jpg'
const Jobcardprogress = () => {
  return (
      <Container fluid>
            <Row className="mt-3">
                <Col lg={8}>
                     <JobCar/>
                </Col>
                <Col lg={4}>
                   <Card>
                      <div className="cardescripthead"><label class="fancycheckbox">
                            <input type="radio" name="wipro" value="M" />
                            <span>Wiper Arms/ Blades</span>
                        </label></div>
                        <div className="maindescriptioncar">
                            <div>
                            <div className="cardescription"><img  src={cardescription} alt="error"/></div>
                            </div>
                            <div>
                            <p className="borderfuel"><label class="fancycheckbox1">
                            <input type="radio" name="fuel" value="M" />
                                <span>Fuel</span></label></p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="442" viewBox="0 0 8 442">
                                  <path id="Path_21404" data-name="Path 21404" d="M5,0H437c2.761,0,5,1.791,5,4s-2.239,4-5,4H5C2.239,8,0,6.209,0,4S2.239,0,5,0Z" transform="translate(0 442) rotate(-90)" fill="#999" opacity="0.48"/>
                                </svg>
                        </div>
                        </div>
                        <CardFooter className='footcarlist'>
                            <div className="listcarimg">
                            <ul className="carlist">
                                <li><img src={carfront} alt="error"/></li>
                                <li><img src={carleft} alt="error"/></li>
                                <li><img src={carright} alt="error"/></li>
                                <li><img src={backcar} alt="error"/></li>
                            </ul>
                            </div>
                            <div className="viewcars">
                                <h5>+24 images</h5>
                                <Link to="/Nextcarprogress">View all images</Link>
                            </div>
                        </CardFooter>
                   </Card>
                </Col>
            </Row>
      </Container>
  );
};

export default Jobcardprogress;
