import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import firstchoice from '../../Images/choicefirst.jpg'
import './jobcar.css'
const JobCar = () => {
  return(
    <div> 
        <div className="infobooking">
        <div className="bookingstatus"><i class="fas fa-arrow-left"></i><h4>Booking ID: MG1234567890 </h4></div>
          <div className="bookingstatus"><small>Status</small><p>Work in Progress</p></div>
        </div>
        <Card className="d-flex rounded shadow">
            <div className="jobcarHeader">
                <h3>Job Card</h3>
                <div>
                    <h5>Maruti Suzuki  XL6 Petrol</h5>
                    <p>MH 04 AB 3827</p>
                </div>
                <div>
                    <h5>Engine no.</h5>
                    <p>MACD1234WE2345</p>
                </div>
                <div>
                    <h5>Chassis no.</h5>
                    <p>MACD1234WE2345</p>
                </div>
                <div>
                    <h5>Kms Driven</h5>
                    <p>113456</p>
                </div>
            </div>
            <CardBody className='jobcarContainer'>
                <Row>
                    <Col lg={4}>
                <CardText>
                 <h5>Inventory Checklist</h5>
                 <Card className="fistCard d-flex rounded shadow">
                     <CardBody>
                     <ul><li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span className="alignlist">Owners Manual</span>
                        </label>
                    </li><li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Infotainment System</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Speakers</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Key Chain</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Key Remote</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Doll/Idols</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Air Freshner</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Mobile Charger</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Upholstery torn/broken</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Jack & Handle</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Floor Mats</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Seat Cover</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Tool Kit</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Boot Mat</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Mud Flaps</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Spare Wheel</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Fog Lamp</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Wheel Cover/ Cap</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Wiper Arms/ Blades</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Side Mirrors</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Fuel Cap</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Horns</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Underbody Scratches</span>
                        </label>
                    </li>
                      </ul>
                     </CardBody>
                 </Card>
                 </CardText>
                 </Col>
                 <Col lg={4}>
                 <CardText>
                 <h5>Demanded Jobs</h5>
                 <Card className="fistCard d-flex rounded shadow">
                     <CardBody>
                         <ul>
                             <li>
                         <label>
                                <input
                                type="radio"
                                value="motor"
                                />
                                <span>Starter Motor Repair</span>
                          </label>
                        </li>
                            <li>
                            <label>
                                <input
                                type="radio"
                                value="motor"
                              
                                />
                                <span>Basic Service</span>
                          </label>
                            </li>
                            <li>
                              <label>
                                    <input
                                    type="radio"
                                    value="motor"
                                 
                                    />
                                    <span>Engine Scanning</span>
                               </label>
                                </li>
                            <li>
                            <label>
                                    <input
                                    type="radio"
                                    value="motor"
                                  
                                    />
                                    <span>Inspection & Diagnostics</span>
                               </label>
                            </li>
                         </ul>
                     </CardBody>
                     <>
                         <div className="footjobcar">
                         <Link className='linkcolor'><span><i class="far fa-edit"></i></span> Add service instructions</Link>
                         </div>
                     </>
                 </Card>
                 </CardText>
                 </Col>
                 <Col lg={4}>
                 <CardText>
                 <h5>Demanded Jobs</h5>
                    <CardBody>
                        <Card className="rounded shadow">
                            <div className="jobcarpayhead">
                                   <p>We have recommended following services for your vehicle,
                                        Please Approve!</p>
                            </div>
                            <div>
                                <div className="serives">
                                    <div>
                                        <small>Service </small>
                                        <h6>Battery Termninal</h6>
                                        <p>₹1,459</p>
                                    </div>
                                    <div>
                                        <small>View Details</small>
                                        <p className="serviceicon">
                                        <i class="fas fa-check-circle"></i>
                                        <i class="far fa-times-circle"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="serives">
                                    <div>
                                        <small>Service 1 </small>
                                        <h6>Battery Termninal</h6>
                                        <p>₹1,459</p>
                                    </div>
                                    <div>
                                        <small>View Details</small>
                                        <p className="serviceicon">
                                        <i class="fas fa-check-circle"></i>
                                        <i class="far fa-times-circle"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="serives">
                                    <div>
                                        <small>Service 1 </small>
                                        <h6>Engine Scanning</h6>
                                        <p>₹999</p>
                                    </div>
                                    <div>
                                        <small>View Details</small>
                                        <p className="serviceicon">
                                        <i class="fas fa-check-circle"></i>
                                        <i class="far fa-times-circle"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="serives">
                                    <div>
                                        <small>Service 1 </small>
                                        <h6>Starter Motor Repair</h6>
                                        <p>₹1,459</p>
                                    </div>
                                    <div>
                                        <small>View Details</small>
                                        <p className="serviceicon">
                                        <i class="fas fa-check-circle"></i>
                                        <i class="far fa-times-circle"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </CardBody>
                 </CardText>
                 </Col>
                 </Row>
            </CardBody>
            <CardFooter className="finalfoot">
                <div className="firstfootfinal">
                    <p className="firststep"><img src={firstchoice} alt="error"/></p>
                    <div className="finalfootcolor">
                        <h5>Mahindra First Chice</h5>
                        <p>Kandivali East, Mumbai 400101</p>
                     </div>
                     <p className="footicon">
                     <Link><p className="comment1"><i class="fas fa-share-alt"></i></p></Link>
                     <Link><p className="comment1"><i class="fas fa-phone-alt"></i></p></Link> 
                     </p>
                </div>
                <div className="firstfootfinal">
                    <p className="firststep"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
  <g id="Group_17600" data-name="Group 17600" transform="translate(631.952 596.673)">
    <path id="Path_16869" data-name="Path 16869" d="M-631.952-569.614v-4.1a4.137,4.137,0,0,0,.216-1.315,23.911,23.911,0,0,1,6.07-13.164c6.752-7.307,15.1-9.983,24.77-7.674,7.98,1.9,13.588,6.91,16.937,14.391a23.254,23.254,0,0,1,2,9.321c-.155-.144-.314-.283-.463-.432q-7.717-7.711-15.435-15.422c-.179-.179-.322-.422-.621-.435-2.061-2.866-5.016-4.183-8.364-4.818a27.924,27.924,0,0,0-5.37-.505.679.679,0,0,0-.542.264,18.444,18.444,0,0,0-2.655,3.657,9.33,9.33,0,0,0-1.3,6.21c.11.622.183,1.25.273,1.876a2.631,2.631,0,0,0-1.314,2.527c.058.663.137,1.328.142,1.992a2.45,2.45,0,0,0,1.093,2.158l.2.1-.006-.006a6.9,6.9,0,0,0,1.452,1.563,8.867,8.867,0,0,0,2.456,4.012l-.012,2.082c-.891.007-1.782-.05-2.672.03l-2.912,3.077c-.553,0-1.107-.005-1.66.016a7.523,7.523,0,0,0-7.253,5.787c-.114.471-.161.959-.239,1.439a24.6,24.6,0,0,1-4.505-10.886A7.847,7.847,0,0,0-631.952-569.614Z" fill="#004899"/>
    <path id="Path_16870" data-name="Path 16870" d="M-404.157-319.589a19.132,19.132,0,0,1-2.88,3.347,24.894,24.894,0,0,1-13.215,6.656c-.622.108-1.256.15-1.884.222-.079.009-.165,0-.2.1h-2.051q0-5.68,0-11.361c0-.259-.031-.517-.047-.776.012-.028.025-.056.038-.083.157.141.324.271.468.424,1.093,1.156,2.188,2.311,3.267,3.48.278.3.442.322.7-.038,1.263-1.772,2.556-3.522,3.83-5.286.941-1.3,1.869-2.614,2.8-3.921.569,0,1.138-.016,1.706,0a7.52,7.52,0,0,1,5.208,2.2A7.757,7.757,0,0,1-404.157-319.589Z" transform="translate(-182.565 -237.407)" fill="#ffa800"/>
    <path id="Path_16871" data-name="Path 16871" d="M-571.957-321.294c.016.259.047.517.047.776q0,5.681,0,11.361h-2.051c-.08-.15-.228-.093-.348-.106a24.869,24.869,0,0,1-15.379-7.322,17.967,17.967,0,0,1-2.437-2.884c.078-.48.125-.968.239-1.439a7.523,7.523,0,0,1,7.253-5.787c.553-.021,1.106-.011,1.66-.016a2.325,2.325,0,0,0,.121.211q2.045,2.824,4.093,5.647c.831,1.144,1.672,2.281,2.5,3.43.2.273.337.285.56.029.395-.453.8-.9,1.23-1.319C-573.61-319.553-572.9-320.536-571.957-321.294Z" transform="translate(-35.04 -237.516)" fill="#ffc400"/>
    <path id="Path_16872" data-name="Path 16872" d="M-363.848-496.75a7.756,7.756,0,0,0-2.256-5.039,7.52,7.52,0,0,0-5.208-2.2c-.568-.019-1.137,0-1.706,0l-2.875-3.061a21.817,21.817,0,0,0-2.694-.06q-.013-1.129-.025-2.258c.292-.323.6-.634.875-.97a9.055,9.055,0,0,0,1.871-4.289,2.085,2.085,0,0,0,2.445-2.124c.028-.647.086-1.295.164-1.938a2.834,2.834,0,0,0-1.328-2.869c.01-.112.018-.225.031-.337a11.38,11.38,0,0,0,.2-2.7,9.436,9.436,0,0,0-1.254-3.6c.3.013.442.257.621.435q7.72,7.709,15.435,15.421c.149.149.309.288.463.432a24.331,24.331,0,0,1-3.359,13.057A13.783,13.783,0,0,1-363.848-496.75Z" transform="translate(-222.874 -60.246)" fill="#3861ab"/>
    <path id="Path_16873" data-name="Path 16873" d="M-505.789-560.487c-.09-.625-.163-1.254-.273-1.876a9.33,9.33,0,0,1,1.3-6.21,18.444,18.444,0,0,1,2.655-3.657.679.679,0,0,1,.542-.264,27.921,27.921,0,0,1,5.37.506.946.946,0,0,0-.1.565q0,4.65,0,9.3a6.484,6.484,0,0,1-2.377-.433,2.524,2.524,0,0,0-3.576,1.9c-.275,1.033-.557,2.064-.821,3.1-.066.261-.173.375-.459.358a10.23,10.23,0,0,0-1.315,0c-.321.022-.45-.07-.494-.4C-505.468-558.568-505.636-559.527-505.789-560.487Z" transform="translate(-110.647 -21.273)" fill="#3a3a3a"/>
    <path id="Path_16874" data-name="Path 16874" d="M-424.021-558.423q0-4.649,0-9.3a.947.947,0,0,1,.1-.565c3.348.635,6.3,1.952,8.363,4.818a9.437,9.437,0,0,1,1.254,3.6,11.382,11.382,0,0,1-.2,2.7c-.013.112-.021.224-.031.337-.137.928-.286,1.854-.406,2.784-.05.386-.142.63-.617.571a6.436,6.436,0,0,0-1.216,0,.42.42,0,0,1-.5-.383c-.156-.626-.327-1.249-.494-1.873q-.182-.678-.371-1.354a2.494,2.494,0,0,0-3.479-1.838,8.418,8.418,0,0,1-2.4.534Z" transform="translate(-182.923 -24.974)" fill="#272727"/>
    <path id="Path_16875" data-name="Path 16875" d="M-512.6-489.3c.153.961.32,1.919.45,2.883.045.332.173.424.494.4a10.247,10.247,0,0,1,1.315,0c.287.017.393-.1.459-.358.263-1.036.546-2.067.821-3.1a2.524,2.524,0,0,1,3.576-1.9,6.48,6.48,0,0,0,2.377.433l0,.03q0,2.971,0,5.941a3.526,3.526,0,0,0-2.042.813,7.258,7.258,0,0,1-4.48,1.656,3.859,3.859,0,0,0-1.619.2c-.381-.238-.845-.039-1.234-.232l.006.006-.2-.1a2.45,2.45,0,0,1-1.093-2.158c-.005-.664-.085-1.329-.142-1.992A2.632,2.632,0,0,1-512.6-489.3Z" transform="translate(-103.833 -92.458)" fill="#ffc893"/>
    <path id="Path_16876" data-name="Path 16876" d="M-505-343.816c-.943.758-1.654,1.741-2.513,2.581-.429.42-.836.866-1.23,1.319-.223.257-.364.244-.56-.029-.824-1.149-1.665-2.286-2.5-3.431q-2.049-2.821-4.093-5.647a2.324,2.324,0,0,1-.121-.211l2.912-3.077,2.668,2.674a1.3,1.3,0,0,0,.381.4q2.479,2.658,5.095,5.183l0,.15C-504.979-343.872-504.992-343.844-505-343.816Z" transform="translate(-101.993 -214.994)" fill="#323941"/>
    <path id="Path_16877" data-name="Path 16877" d="M-491.714-433.868a3.86,3.86,0,0,1,1.619-.2,7.258,7.258,0,0,0,4.48-1.656,3.526,3.526,0,0,1,2.042-.813l0,.016,0,10.046a8.02,8.02,0,0,1-5.466-2.051,8.867,8.867,0,0,1-2.456-4.012Z" transform="translate(-123.374 -140.891)" fill="#ede5d3"/>
    <path id="Path_16878" data-name="Path 16878" d="M-469.6-369.885a8.02,8.02,0,0,0,5.466,2.051q.005.039.007.079-.005,1.523-.01,3.046l-5.1.014a1.3,1.3,0,0,1-.381-.4q0-1.352,0-2.7Z" transform="translate(-142.812 -199.531)" fill="#fca968"/>
    <path id="Path_16879" data-name="Path 16879" d="M-489.133-352.655q0,1.352,0,2.7l-2.668-2.674C-490.915-352.705-490.024-352.648-489.133-352.655Z" transform="translate(-123.294 -214.678)" fill="#483e54"/>
    <path id="Path_16880" data-name="Path 16880" d="M-500.745-416.033l.217,1.331a6.892,6.892,0,0,1-1.452-1.562C-501.59-416.072-501.127-416.271-500.745-416.033Z" transform="translate(-114.343 -158.725)" fill="#d26d18"/>
    <path id="Path_16881" data-name="Path 16881" d="M-503.572-417.036l.2.1Z" transform="translate(-112.942 -158.047)" fill="#d26d18"/>
    <path id="Path_16882" data-name="Path 16882" d="M-424.116-343.854q0-.075,0-.15l.01-.032c1.785-1.639,3.445-3.4,5.111-5.158a1.252,1.252,0,0,0,.371-.4l2.7-2.667,2.875,3.062c-.934,1.307-1.862,2.619-2.8,3.921-1.274,1.764-2.566,3.515-3.83,5.286-.257.361-.421.339-.7.038-1.079-1.169-2.174-2.324-3.267-3.48C-423.792-343.583-423.959-343.713-424.116-343.854Z" transform="translate(-182.843 -215.039)" fill="#323941"/>
    <path id="Path_16883" data-name="Path 16883" d="M-424.04-485.33q0-2.971,0-5.941a8.418,8.418,0,0,0,2.4-.534,2.494,2.494,0,0,1,3.479,1.838q.188.677.371,1.354c.168.624.339,1.246.494,1.873a.42.42,0,0,0,.5.383,6.429,6.429,0,0,1,1.216,0c.475.059.567-.185.617-.571.12-.93.269-1.856.406-2.784a2.834,2.834,0,0,1,1.328,2.869c-.078.643-.137,1.291-.164,1.938a2.084,2.084,0,0,1-2.445,2.124c-.452-.034-.9-.1-1.356-.1a7.525,7.525,0,0,1-4.968-1.781,2.759,2.759,0,0,0-1.885-.659Z" transform="translate(-182.907 -92.097)" fill="#fca968"/>
    <path id="Path_16884" data-name="Path 16884" d="M-424.044-436.421a2.759,2.759,0,0,1,1.885.659,7.525,7.525,0,0,0,4.968,1.781c.452,0,.9.063,1.356.1a9.056,9.056,0,0,1-1.871,4.289c-.276.336-.582.647-.875.97a10.927,10.927,0,0,1-1.7,1.216,9.585,9.585,0,0,1-3.753,1.112q0-.04-.007-.079Q-424.043-431.4-424.044-436.421Z" transform="translate(-182.907 -140.99)" fill="#d0c5af"/>
    <path id="Path_16885" data-name="Path 16885" d="M-424.047-369.209a9.586,9.586,0,0,0,3.753-1.112,10.921,10.921,0,0,0,1.7-1.216q.012,1.129.025,2.258,0,1.363,0,2.727a1.251,1.251,0,0,1-.372.4l-5.118-.007h0Z" transform="translate(-182.894 -198.077)" fill="#ec9056"/>
    <path id="Path_16886" data-name="Path 16886" d="M-378.41-350.126q0-1.363,0-2.727a21.819,21.819,0,0,1,2.694.06Z" transform="translate(-223.053 -214.505)" fill="#3a3145"/>
    <path id="Path_16887" data-name="Path 16887" d="M-466.454-326.812l5.1-.014h0q0,2.582.006,5.165l-.01.032Q-463.967-324.161-466.454-326.812Z" transform="translate(-145.596 -237.415)" fill="#ffc893"/>
    <path id="Path_16888" data-name="Path 16888" d="M-424.051-321.661q0-2.582-.006-5.165l5.118.007C-420.606-325.063-422.266-323.3-424.051-321.661Z" transform="translate(-182.895 -237.415)" fill="#fca968"/>
  </g>
</svg>
</p>
                    <div className="finalfootcolor">
                        <h5>Aditya Mishra</h5>
                        <p>Service Advisor</p>
                     </div>
                     <p className="footicon">
                     <Link><p className="comment1"><i class="fas fa-phone-alt"></i></p></Link>
                     <Link><p className="comment1"><i class="far fa-comments"></i></p></Link> 
                     </p>
                </div>
            </CardFooter>
        </Card>
    </div>
    ) 
};

export default JobCar;
