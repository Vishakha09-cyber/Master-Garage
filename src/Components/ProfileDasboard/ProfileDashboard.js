import React from 'react'
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter, CardHeader } from 'reactstrap';
import Coins from '../../Images/Images/drawable-ldpi/coins.png';
import './dashboard.css';
import {Link} from 'react-router-dom';
import profile from '../../Images/profile.png'
import visa from '../../Images/visa.png';
import googlepay from '../../Images/googlepay.png';
import freechare from '../../Images/freechagre.png';
import paytm from '../../Images/paytm.png';
import phonepay from '../../Images/phonepay.png';
import Switch from "react-switch";

const ProfileDashboard = () => {
    return (
        <Container className="profile-dashboard">
            <Card>
                <div className="allcontainer">
                    <Row className="p-4">
                        <Col lg={3}>
                           <div className="profileheader">
                                <img src={profile} alt="error" className="mb-4"/>
                                <Button variant="primary" color="primary"><i class="far fa-edit"></i>Update Profile</Button>
                           </div>
                        </Col>
                        <Col lg={8}>
                            <div className="peofileinfos">
                                 <div className="profilename"><h3>Sachin Tiwari</h3> <p><Link className="logoutprofile"><i class="fas fa-arrow-left"></i> Logout</Link></p></div> 
                               <div className="subconatiner">
                                <ul>
                                    <li><i class="far fa-envelope"></i>sachin.vipmail@gmail.com</li>
                                    <li><i class="fas fa-phone"></i>+91 8853299293</li>
                                    <li><i class="fas fa-phone"></i>+91 9082224157</li>
                                    <li><i class="fas fa-map-marker-alt"></i>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station, 
                                    Andheri East, Mumbai- 123 456, Maharashtra</li>
                                </ul>
                                <div className="qrborder"><i class="fas fa-qrcode"></i></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>
            <div className="mt-4">
                <div className="profileseconfcont p-3">
                    <div className="experiencref">
                        <p><i class="fas fa-share-alt"></i> Refer a friend</p>
                        <p>How has your experience been? Tell us</p>
                        <p>Need Help?</p>
                    </div>
                    <div className="experiencref1">
                       <p className="referprofile"> <small>Refer a friend to Master Garage & earn
                         coins once they complete booking</small></p>
                         <p className="referprofile1"><svg id="Group_19003" data-name="Group 19003" xmlns="http://www.w3.org/2000/svg" width="156.027" height="19.124" viewBox="0 0 156.027 19.124">
                                <path id="Path_18641" data-name="Path 18641" d="M775,485.67a1,1,0,0,0-.86-.67l-5.69-.83L765.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L765,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                <path id="Path_18642" data-name="Path 18642" d="M809,485.67a1,1,0,0,0-.86-.67l-5.69-.83L799.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L799,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                <path id="Path_18643" data-name="Path 18643" d="M843,485.67a1,1,0,0,0-.86-.67l-5.69-.83L833.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L833,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                <path id="Path_18644" data-name="Path 18644" d="M877,485.67a1,1,0,0,0-.86-.67l-5.69-.83L867.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L867,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                <path id="Path_18645" data-name="Path 18645" d="M911,485.67a1,1,0,0,0-.86-.67l-5.69-.83L901.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L901,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#00155a"/>
                                </svg>Write a review
                               </p>
                               <button className="btncontact">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="paymentfullcont mt-3">
                <h4>Payment</h4>
                 <Card>
                     <div className="p-2 paymentcontmain">
                         <div>
                                <h5>Saved Cards</h5>
                                <div className="paymentcont">
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={visa} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>8089 - XXXX - XXXX - 0099</p>
                                                <small>Valid Till 08/2024</small>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={visa} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>8089 - XXXX - XXXX - 0099</p>
                                                <small>Valid Till 08/2024</small>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        
                                        </div>
                                    </Card>
                                    </Col>
                                </div>
                             </div>
                         <div>
                                <h5>Saved UPI Addresses</h5>
                                <div className="paymentcont">
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={phonepay} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>8853299293@oksbi</p>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={googlepay} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>8853299293@oksbi</p>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        
                                        </div>
                                    </Card>
                                    </Col>
                                </div>
                         </div>
                         <div>
                                <h5>Linked Wallets</h5>
                                <div className="paymentcont">
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={paytm} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>Paytm</p>
                                                <small>Balance- 0</small>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={freechare} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>Freecharge</p>
                                                <small>Balance- 0</small>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        
                                        </div>
                                    </Card>
                                    </Col>
                                </div>
                         </div>
                     </div>
                 </Card>
            </div>
            <div className="mt-4 mb-4">
                <h5>Saved Address</h5>
                <Row>
                <Col lg={6} className="mb-4">
                <div>
                    <div className="profileaddres p-3">
                        <div className="editdelete">
                            <p><Link className="edit1">Edit</Link></p>
                           <p><Link className="delete1">Delete</Link></p> 
                        </div>
                        <div className="homeaddress">
                          <i class="fas fa-home"></i>
                            <div>
                                <p>Home</p>
                                <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                            Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={6} className="mb-4">
                <div>
                    <div className="profileaddres p-3">
                        <div className="editdelete">
                            <p><Link className="edit1">Edit</Link></p>
                           <p><Link className="delete1">Delete</Link></p> 
                        </div>
                        <div className="homeaddress">
                        <i class="fas fa-briefcase"></i>
                            <div>
                                <p>Office</p>
                                <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                            Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={6} className="mb-4">
                <div>
                    <div className="profileaddres p-3">
                        <div className="editdelete">
                            <p><Link className="edit1">Edit</Link></p>
                           <p><Link className="delete1">Delete</Link></p> 
                        </div>
                        <div className="homeaddress">
                        <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <p>Aditya</p>
                                <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                            Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={6} className="mb-4">
                <div>
                    <div className="profileaddres p-3">
                        <div className="editdelete">
                            <p><Link className="edit1">Edit</Link></p>
                           <p><Link className="delete1">Delete</Link></p> 
                        </div>
                        <div className="homeaddress">
                        <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <p>Parents</p>
                                <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                            Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Link><i class="fas fa-plus"></i> Add more Address</Link>
                </Row>
            </div>
            <div>
                <h5>Notification Setting</h5>
                <div className="profileaddres p-3">
                    <ul>
                        <li className="notificationprofile">
                            <p>Allow garages to send you personalized promotional emails for discounts & special offers </p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                        <li className="notificationprofile">
                            <p>Alert me on reminders and upcoming appointment notifications</p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                        <li className="notificationprofile">
                            <p>Notify me about offers and discounts by Master Garage</p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                        <li className="notificationprofile">
                            <p>Notify me via e-mail when a merchant sends me a personalized message</p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                        <li className="notificationprofile">
                            <p>WhatsApp notifications when you book a service through Master Garage </p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="removeprofile mb-4">
                <h5>Remove Account</h5>
                  <p>Want to stop using this account?</p>
                  <button className="btnremove">REMOVE</button>
            </div>

        </Container>
    )
}

export default ProfileDashboard
