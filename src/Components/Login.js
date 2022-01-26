import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
const Login = () => {
    return (
        <Container>
            <Card className="card1 d-flex rounded">
            <div className="login">
               <div className="">
               <div className="hello">
                 <h3>Hello User,</h3>
                 <p> <i class="far fa-times"></i></p>
                 </div>
                    <div className="headerProfile">
                       <div><img src={profile} alt="error"/></div>
                       <div className="logindetail">
                         <Link to="/profile"><button className="Login">Login</button></Link>
                          <p>Don't have an account? </p>
                          <h6>No problem <Link>Sign-up</Link> now & earn rewards</h6>
                       </div>
                    </div>
               </div>
               <CardBody >
                  <ul className="supportprofile">
                    <li><Link to="/Tracking">
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                            <g id="Group_27107" data-name="Group 27107" transform="translate(1 1)">
                                <path id="Path_28622" data-name="Path 28622" d="M1068.67,59.667a16,16,0,1,0-16-16A16,16,0,0,0,1068.67,59.667Z" transform="translate(-1052.67 -27.667)" fill="none" stroke="#00155a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                <path id="Path_28623" data-name="Path 28623" d="M1061,40.167h.019" transform="translate(-1044.52 -14.157)" fill="none" stroke="#00155a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                <path id="Path_28624" data-name="Path 28624" d="M1058.57,35.717a5.886,5.886,0,0,1,2.56-3.085,5.8,5.8,0,0,1,8.75,5.024c0,3.879-5.83,7.491-5.83,7.491" transform="translate(-1047.851 -23.834)" fill="none" stroke="#00155a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </g>
                            </svg></Link>
                            <p>Help & Support</p>
                    </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <g id="Group_27108" data-name="Group 27108" transform="translate(-1012 -352)">
                                    <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M16.166,5.676a3.9,3.9,0,0,0-5.583,0l-.761.775-.761-.775a3.9,3.9,0,0,0-5.583,0,4.078,4.078,0,0,0,0,5.69l.761.775,5.583,5.69,5.583-5.69.761-.775a4.077,4.077,0,0,0,0-5.69Z" transform="translate(1018.178 356.836)" fill="none" stroke="#142a62" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    <g id="Ellipse_1813" data-name="Ellipse 1813" transform="translate(1012 352)" fill="none" stroke="#142a62" stroke-width="2">
                                    <circle cx="16" cy="16" r="16" stroke="none"/>
                                    <circle cx="16" cy="16" r="15" fill="none"/>
                                    </g>
                                </g>
                                </svg>
                         <p>Favourites</p>
                            </li>
                            <li>
                           <Link to="/Accountscan"> <svg xmlns="http://www.w3.org/2000/svg" width="19.833" height="16.554" viewBox="0 0 19.833 16.554">
                                <g id="Group_27112" data-name="Group 27112" transform="translate(0.75 0.804)">
                                    <path id="Path_28609" data-name="Path 28609" d="M14.167,17.5V15.833A3.333,3.333,0,0,0,10.833,12.5H4.167A3.333,3.333,0,0,0,.833,15.833V17.5" transform="translate(-0.833 -2.5)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    <path id="Path_28610" data-name="Path 28610" d="M7.5,9.167A3.333,3.333,0,1,0,4.167,5.833,3.333,3.333,0,0,0,7.5,9.167Z" transform="translate(-0.833 -2.5)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    <path id="Path_28611" data-name="Path 28611" d="M19.167,17.5V15.833a3.334,3.334,0,0,0-2.5-3.225" transform="translate(-0.833 -2.5)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    <path id="Path_28612" data-name="Path 28612" d="M13.333,2.608a3.333,3.333,0,0,1,0,6.458" transform="translate(-0.833 -2.5)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                </g>
                                </svg></Link>

                              <p>Refer & Earn</p>
                            </li>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <g id="Group_30278" data-name="Group 30278" transform="translate(-1012 -462)">
                                        <g id="Ellipse_2134" data-name="Ellipse 2134" transform="translate(1012 462)" fill="none" stroke="#142a62" stroke-width="2">
                                        <circle cx="16" cy="16" r="16" stroke="none"/>
                                        <circle cx="16" cy="16" r="15" fill="none"/>
                                        </g>
                                        <g id="telephone-2" transform="translate(1020.289 469.76)">
                                        <path id="Path_1428" data-name="Path 1428" d="M4.221,10.9a17.391,17.391,0,0,0,5.785,4.531,9,9,0,0,0,3.237.958c.078,0,.153.007.231.007a2.681,2.681,0,0,0,2.079-.893.074.074,0,0,0,.014-.017,8.751,8.751,0,0,1,.656-.679c.16-.153.323-.313.479-.476a1.64,1.64,0,0,0-.007-2.442L14.653,9.844a1.652,1.652,0,0,0-1.2-.55,1.708,1.708,0,0,0-1.209.547l-1.216,1.216c-.112-.065-.228-.122-.336-.177a4.2,4.2,0,0,1-.374-.2,12.87,12.87,0,0,1-3.074-2.8A7.411,7.411,0,0,1,6.208,6.22c.319-.289.618-.591.907-.887.1-.105.207-.211.313-.316a1.741,1.741,0,0,0,.564-1.223,1.728,1.728,0,0,0-.564-1.223L6.415,1.559c-.119-.119-.231-.234-.346-.353C5.845.975,5.61.737,5.379.523A1.693,1.693,0,0,0,4.184,0,1.743,1.743,0,0,0,2.974.527L1.7,1.8A2.61,2.61,0,0,0,.926,3.468,6.287,6.287,0,0,0,1.4,6.186,15.81,15.81,0,0,0,4.221,10.9ZM1.755,3.54A1.8,1.8,0,0,1,2.3,2.385L3.559,1.121A.915.915,0,0,1,4.184.832a.868.868,0,0,1,.611.3c.228.211.442.431.673.666.115.119.234.238.353.36L6.833,3.166a.922.922,0,0,1,.319.635.922.922,0,0,1-.319.635c-.105.105-.211.214-.316.319-.316.319-.611.622-.938.91l-.017.017a.664.664,0,0,0-.17.754c0,.01.007.017.01.027A8,8,0,0,0,6.6,8.4,13.584,13.584,0,0,0,9.87,11.386a4.862,4.862,0,0,0,.448.245,4.2,4.2,0,0,1,.374.2l.037.02a.71.71,0,0,0,.329.085.72.72,0,0,0,.506-.231l1.27-1.27a.9.9,0,0,1,.622-.3.853.853,0,0,1,.6.3l2.048,2.045a.819.819,0,0,1-.01,1.281c-.143.153-.292.3-.452.452a9.783,9.783,0,0,0-.71.737,1.865,1.865,0,0,1-1.457.618c-.058,0-.119,0-.177-.007a8.179,8.179,0,0,1-2.928-.876,16.522,16.522,0,0,1-5.506-4.314A15.133,15.133,0,0,1,2.183,5.907,5.479,5.479,0,0,1,1.755,3.54Z" transform="translate(-0.912 0)" fill="#00155a" stroke="#00155a" stroke-width="1"/>
                                        </g>
                                    </g>
                                    </svg>
                                    <p>Contact Us</p>
                            </li>
                  </ul>
               </CardBody>
               <footer>
                 <div>
                   <ul className="social_icon">
                      <li><i class="fas fa-share-alt"></i><span>Share us</span></li>
                      <li><i class="fab fa-facebook-square"></i></li>
                      <li><i class="fab fa-twitter"></i></li>
                      <li><i class="fab fa-linkedin"></i></li>
                      <li><i class="fab fa-instagram"></i></li>
                   </ul>
                 </div>
                 <div className="tearmcondition">
                    <Link className="tearm"><p>Terms & Conditions</p></Link><p className="tearms">|</p>
                    <Link className="tearm"><p>Privacy Policy</p></Link>
                 </div>
               </footer>
               </div>
            </Card>
        </Container>
    )
}

export default Login
