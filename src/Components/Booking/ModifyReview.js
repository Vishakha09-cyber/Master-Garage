import React from 'react'
import Track from '../Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import './Booking.css';

const ModifyReview = () => {
    return (
         <Container fluid>
            <Row className='p-5'>
            <p>Tracking Status</p>
            <Col lg={8}>
            <Track/>
            </Col>
            <Col lg={4}>
             <Card className='booking1 d-flex rounded-3 shadow-1'>
                 <CardBody>
                      <CardText className='innercard1'>
                           <div className="pickup">
                               <h5>Vehicle Received</h5>
                               <p>Garage will soon diagnose your 
                                   vehicle and start the service</p>
                                   <p><Link className="sumdownload">Download Summery</Link></p>
                               <button className="btnjobcard1">JOB CARD</button>
                           </div>
                           <div className="qrcode1">
                           <i class="fas fa-qrcode"></i>
                          <Link><p className="downloadqr1">Download QR</p></Link>
                           </div>
                      </CardText>
                      <CardSubtitle>
                          <div className="thanking1">
                              <div>
                          <h4 className="mahindrachoice">Mahindra First Choice</h4>
                          <h5>Your Rating & Review</h5>
                           <p>Great Service and support by garage, as well as Master Garage Team, I loved the App and keep on doing great! 
                           Wish you the Best  of Luck</p>
                           </div>
                    </div>
                      </CardSubtitle>
                         <div className="btnalign">
                      <Link to="/Vehicaldelivery"> <button className="modifyreview">Modify</button></Link>
                       </div>
                      </CardBody>
                              <div className="payfooter1">
                                  <div className="payAmount1">
                                   <div className="total1">
                                            <p>Paid</p>
                                            <h5>1673</h5>
                                   </div>
                                  </div>
                                  <div className="endthank">
                                      <Link to="/payment" className="thankletter"><h4>THANK YOU</h4></Link>
                                  </div>
                              </div>
                      
             </Card>
            </Col>
            </Row>
            
        </Container>
    )
}

export default ModifyReview
