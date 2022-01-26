import React from 'react'
import Track from '../Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import './Booking.css';
const Booking1 = () => {
    return (
        <Container fluid>
            <Row className='p-5'>
            <Col lg={8}>
            <Track/>
            </Col>
            <Col lg={4}>
             <Card className='booking1 d-flex rounded-3 shadow-1'>
                 <CardBody>
                      <CardText className='innercard1'>
                           <div className="pickup">
                               <h5>Pick-Up Scheduled</h5>
                               <p>Share the OTP or QR Code with Driver on his Arrival</p>
                               <button className="btnjobcard1">JOB CARD</button>
                           </div>
                           <div className="qrcode1">
                           <i class="fas fa-qrcode"></i>
                          <Link><p className="downloadqr1">Download QR</p></Link>
                          <h6>OTP-0091</h6>
                           </div>
                      </CardText>
                      <CardSubtitle className="carbody1">
                          <div className="carDetail1">
                              <p className="caricon1"><i class="fad fa-car"></i></p>
                              <div className="custominfo1">
                              <h5>Mr.Shyam Kanojia</h5>
                              <p>Your Vehicle Pickup Driver</p>
                              </div>
                          </div>
                          <div><Link><p className="call1"><i class="fas fa-phone-alt"></i></p></Link></div>
                      </CardSubtitle>
                      <CardText className="cardText1">
                          <h1>1hr 45 mins left</h1>
                      </CardText>
                      <CardText className="schedulTime1">
                          <div>
                              <h5>Pick-Up Date</h5>
                              <p>21/01/2021</p>
                          </div>
                          <div>
                              <h5>Pick-Up Time</h5>
                              <p>11.00 AM</p>
                          </div>
                      </CardText>
                      </CardBody>
                              <div className="payfooter1">
                                  <div className="payAmount1">
                                   <p className="cardSize1"><i class="far fa-credit-card"></i></p>
                                   <div className="total1">
                                            <p>Total payment</p>
                                            <h5>1673</h5>
                                   </div>
                                  </div>
                                  <div >
                                     <Link to="/confirmbook"> <Button className="totalbtn1">Pay now</Button></Link>
                                  </div>
                              </div>
                      
             </Card>
            </Col>
            </Row>
            
        </Container>
    )
}

export default Booking1
