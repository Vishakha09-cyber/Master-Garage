import React from 'react'
import Track from '../Components/Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardFooter, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom';
import '../Components/Trackingstatus/Track.css';
import Qrcode from '../Images/Images/qrcode.png'
const AboutUs = () => {
    return (
        <Container fluid>
            <Row className='p-5'>
            <Col lg={8}>
            <Track/>
            </Col>
            <Col lg={4}>
             <Card className='booking d-flex rounded-3 shadow-1'>
                  <CardBody className='innercard'>
                        <CardTitle className="qrheader">
                            <div>
                      <h3>Booking Confirmed</h3>
                      <p>Waiting for Vehicle  Pick-up Schedule by Garage </p>
                      </div>
                      </CardTitle>
                      <div className="qrflex">
                          <p className="Qrcode">
                           {/* <img scr={Qrcode} alt="error"/> */}
                           <i class="fas fa-qrcode"></i>
                          <Link><p className="downloadqr">Download QR</p></Link>
                       
                          <ButtonGroup className="groupbtn">
                              <button className='btncancle'>Cancel</button>
                              <button className="btnReschedul">Reschedule</button>
                          </ButtonGroup>
                          </p>
                      </div>
                      </CardBody>
                      <div>
                              <div className="payfooter">
                                  <div className="payAmount">
                                   <p className="cardSize"><i class="far fa-credit-card"></i></p>
                                   <div className="total">
                                            <p>Total payment</p>
                                            <h5>1673</h5>
                                   </div>
                                  </div>
                                  <div >
                                     <Link to="booking1"><Button className="totalbtn">Pay now</Button></Link> 
                                  </div>
                              </div>
                      </div>
               
             </Card>
            </Col>
            </Row>
            
        </Container>
    )
}

export default AboutUs
