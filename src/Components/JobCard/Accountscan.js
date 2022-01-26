import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import './jobcar.css';
import profile from '../../Images/manprofile.png';
import logo from '../../Images/aboutlogo.PNG';
const Accountscan = () => {
  return (
      <Container>
          <div className="fullpage">
              <div className="accoutscan">
                  <p className="qrscanheader"><i class="fas fa-qrcode"></i><p>Account QR</p></p>
                  <Link className="qrscanheader"><i class="fas fa-download"></i><p>Download QR</p></Link>
              </div>
              <Card>
                  <div className="Qrdetaiils">
                  <CardBody>
                        <div className="profilelogo">
                            <img src={profile} alt="error"/>
                        </div>
                         <div className="qrprofiledes">
                            <div> <h4>Sachin Tiwari</h4>
                              <p>MG 2021 401001 0099</p>
                              </div>
                         </div>
                         <div className="qrscanAccount">
                         <div className="backgroundAccount"><i class="fas fa-qrcode"></i></div>
                         <p className="backgroundAccount">Show this QR at the time checkout </p>
                         </div>
                         <div className="moreQrinfo">
                             <p>All your account information are stored inside for
                                  a better checkout experience. This QR could be used for 
                                  checkout at partner garages, 
                                 also the members can pay in full with MG coins for his booking</p>
                         </div>
                         <div className="garagdes">
                             <p>Powered by</p>
                             <p><img src={logo} alt="error"/></p>
                             <p>Master Garage</p>
                         </div>
                   </CardBody>
                   </div>
              </Card>
          </div>
      </Container>
  );
};

export default Accountscan;

