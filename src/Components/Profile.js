import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import profile from '../Images/manprofile.png'
const Login = () => {
    return (
        <Container>
            <Card className="card1 d-flex rounded">
            <div className="login">
               <div className="">
               <div className="hello">
                 <h5>Hello Sachin,</h5>
                 <p> <i class="far fa-times"></i></p>
                 </div>
                    <div className="headerProfile">
                       <div><img src={profile} alt/></div>
                       <div className="logindetail1">
                          <h3>Sachin Tiwari</h3>
                           <p>+91 8853299293</p>
                           <p>sachin.vipmail@gmail.com</p>
                       </div>
                    </div>
               </div>
               <CardBody >
                  <ul className="supportprofile">
                     <li><Link to="/Routes"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34.539" viewBox="0 0 34 34.539">
                        <g id="Group_21151" data-name="Group 21151" transform="translate(1 1.27)">
                            <path id="Path_28613" data-name="Path 28613" d="M17.666,33.667a16,16,0,1,0-16-16A16,16,0,0,0,17.666,33.667Z" transform="translate(-1.666 -1.667)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_28614" data-name="Path 28614" d="M11.925,6.667l9.223,15.971" transform="translate(7.719 2.893)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_28615" data-name="Path 28615" d="M8.075,6.667H26.521" transform="translate(4.146 2.933)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_28616" data-name="Path 28616" d="M6.15,17.688,15.373,1.717" transform="translate(2.444 -1.621)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_28617" data-name="Path 28617" d="M12.514,21.021,3.291,5.05" transform="translate(-0.158 1.418)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_28618" data-name="Path 28618" d="M20.8,13.333H2.358" transform="translate(-1.024 9.066)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_28619" data-name="Path 28619" d="M18.29,10,9.067,25.971" transform="translate(5.118 5.931)" fill="none" stroke="#232d61" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </g>
                        </svg></Link>
                        <p>Profile</p>
                     </li>
                     <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <g id="Group_27113" data-name="Group 27113" transform="translate(-0.355)">
                                <g id="Group_20472" data-name="Group 20472" transform="translate(5.213 4.321)">
                                <path id="Path_11745" data-name="Path 11745" d="M892.651,635.209c-1.382.738-2.719,1.557-4.08,2.331a.892.892,0,0,1-.76.21,8.637,8.637,0,0,0-1.3-.894c-.246-.117-.493-.232-.748-.325a.677.677,0,0,1-.493-.734c.017-1.468.007-2.935.007-4.4,0-.154,0-.307-.008-.461a.557.557,0,0,1,.3-.316c.255-.06.394.073.527.287v4.842a9.194,9.194,0,0,1,1.786,1.071.6.6,0,0,0,.531-.106q1.8-1.05,3.6-2.1a.628.628,0,0,1,.638-.055A.538.538,0,0,1,892.651,635.209Z" transform="translate(-872.494 -630.603)" fill="gold" stroke="#00155a" stroke-linecap="round" stroke-width="1"/>
                                <path id="Path_11746" data-name="Path 11746" d="M881.554,630.933q0,2.381-.007,4.762c0,.608-.02.635-.585.862a5.326,5.326,0,0,0-1.045.534c-.309.211-.609.436-.917.66-.253.1-.454-.041-.66-.161q-1.9-1.1-3.808-2.2c-.117-.068-.241-.124-.362-.185a.609.609,0,0,1-.041-.62.586.586,0,0,1,.681.021q1.78,1.035,3.56,2.073a.7.7,0,0,0,.548.144,8.505,8.505,0,0,1,1.8-1.061v-4.822c.142-.262.289-.384.538-.329A.558.558,0,0,1,881.554,630.933Z" transform="translate(-872.045 -630.603)" fill="gold" stroke="#00155a" stroke-linecap="round" stroke-width="1"/>
                                <path id="Path_11747" data-name="Path 11747" d="M874.171,650.029l3.9-2.226.222-.127c.532-.3.573-.3,1.041.062a6.37,6.37,0,0,0,1.676.963c.492.187.534.258.535.794q.006,2.407.008,4.811a.6.6,0,0,1-.283.314c-.268.057-.414-.063-.542-.3v-4.826a9.127,9.127,0,0,1-1.789-1.074.676.676,0,0,0-.571.136l-3.558,2.075a.644.644,0,0,1-.632.061A.539.539,0,0,1,874.171,650.029Z" transform="translate(-872.044 -631.278)" fill="gold" stroke="#00155a" stroke-linecap="round" stroke-width="1"/>
                                <path id="Path_11748" data-name="Path 11748" d="M885.268,654.306q0-2.378.008-4.759c0-.607.024-.641.585-.862a6.253,6.253,0,0,0,1.588-.915c.511-.4.547-.407,1.127-.072q1.879,1.087,3.759,2.174c.1.06.211.106.318.157a.573.573,0,0,1,.024.633.58.58,0,0,1-.662-.033q-1.781-1.035-3.559-2.074a.74.74,0,0,0-.543-.148,8.5,8.5,0,0,1-1.8,1.065V654.3c-.142.261-.287.385-.542.327A.559.559,0,0,1,885.268,654.306Z" transform="translate(-872.494 -631.279)" fill="gold" stroke="#00155a" stroke-linecap="round" stroke-width="1"/>
                                <path id="Path_11749" data-name="Path 11749" d="M894.443,646.806l-4.159-2.373a1.156,1.156,0,0,1-.446-.4,7.512,7.512,0,0,0-.015-2.845,30.831,30.831,0,0,1,4.62-2.8c.149.021.31-.026.443.079.13.363.109.468-.193.677-.224.154-.465.282-.7.417q-1.506.86-3.014,1.716a.756.756,0,0,0-.3.316,5.409,5.409,0,0,1-.018,2.024,3.407,3.407,0,0,0,1.123.748c.913.561,1.852,1.075,2.779,1.612.385.223.432.326.362.72C894.79,646.841,894.607,646.784,894.443,646.806Z" transform="translate(-872.677 -630.915)" fill="gold" stroke="#00155a" stroke-linecap="round" stroke-width="1"/>
                                <path id="Path_11750" data-name="Path 11750" d="M872.478,638.381l4.2,2.4a1.061,1.061,0,0,1,.4.376,7.5,7.5,0,0,0,.008,2.818.732.732,0,0,1-.323.379q-2.144,1.228-4.29,2.453c-.149-.021-.31.025-.443-.08-.129-.363-.108-.468.195-.678.223-.154.464-.281.7-.417q1.506-.859,3.013-1.716a.745.745,0,0,0,.3-.318,5.38,5.38,0,0,1,.017-2.023,3.447,3.447,0,0,0-1.124-.747c-.913-.56-1.852-1.075-2.78-1.612-.382-.222-.43-.328-.359-.721C872.131,638.345,872.315,638.4,872.478,638.381Z" transform="translate(-871.96 -630.915)" fill="gold" stroke="#00155a" stroke-linecap="round" stroke-width="1"/>
                                <path id="Path_11752" data-name="Path 11752" d="M887.1,642.625a3.687,3.687,0,1,1-3.677-3.7A3.726,3.726,0,0,1,887.1,642.625Zm-.818-.01a2.925,2.925,0,0,0-2.832-2.883,2.884,2.884,0,1,0-.05,5.768A2.925,2.925,0,0,0,886.283,642.615Z" transform="translate(-872.272 -630.937)" fill="gold" stroke="#00155a" stroke-linecap="round" stroke-width="1"/>
                                </g>
                                <g id="Ellipse_2061" data-name="Ellipse 2061" transform="translate(0.355)" fill="none" stroke="#00155a" stroke-width="2">
                                <circle cx="16" cy="16" r="16" stroke="none"/>
                                <circle cx="16" cy="16" r="15" fill="none"/>
                                </g>
                            </g>
                            </svg>
                             <p>My Garage</p>
                      </li>
                       <li>
                         <svg xmlns="http://www.w3.org/2000/svg" width="23.901" height="29.875" viewBox="0 0 23.901 29.875">
                            <path id="Path_30218" data-name="Path 30218" d="M893.753,30.655h-1.495a2.987,2.987,0,0,0-2.986-2.988H883.3a2.987,2.987,0,0,0-2.986,2.988h-1.495a4.483,4.483,0,0,0-4.481,4.481V53.061a4.484,4.484,0,0,0,4.481,4.481h14.939a4.481,4.481,0,0,0,4.481-4.481V35.136a4.48,4.48,0,0,0-4.481-4.481Zm-10.458,0h5.976v2.987H883.3Zm11.951,22.406a1.494,1.494,0,0,1-1.493,1.494H878.814a1.494,1.494,0,0,1-1.493-1.494V35.136a1.494,1.494,0,0,1,1.493-1.494h1.495A2.987,2.987,0,0,0,883.3,36.63h5.976a2.987,2.987,0,0,0,2.986-2.988h1.495a1.494,1.494,0,0,1,1.493,1.494Z" transform="translate(-874.333 -27.667)" fill="#00155a"/>
                            </svg>
                          <p>My Orders</p>
                       </li>
                       <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width="31.238" height="31.238" viewBox="0 0 31.238 31.238">
                            <path id="Path_30217" data-name="Path 30217" d="M64.238,40.807a13.612,13.612,0,0,1-1.462,6.173,13.807,13.807,0,0,1-12.345,7.634,13.61,13.61,0,0,1-6.173-1.462L35,56.238l3.086-9.259a13.612,13.612,0,0,1-1.462-6.173,13.807,13.807,0,0,1,7.634-12.345A13.614,13.614,0,0,1,50.431,27h.812A13.775,13.775,0,0,1,64.238,39.995Z" transform="translate(-34 -26)" fill="none" stroke="#00155a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                             <p>Chats</p>
                       </li>
                       <li>
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <g id="Group_19390" data-name="Group 19390" transform="translate(-1012 -531)">
                                <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M16.166,5.676a3.9,3.9,0,0,0-5.583,0l-.761.775-.761-.775a3.9,3.9,0,0,0-5.583,0,4.078,4.078,0,0,0,0,5.69l.761.775,5.583,5.69,5.583-5.69.761-.775a4.077,4.077,0,0,0,0-5.69Z" transform="translate(1018.178 535.836)" fill="none" stroke="#00155a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                <g id="Ellipse_1813" data-name="Ellipse 1813" transform="translate(1012 531)" fill="none" stroke="#00155a" stroke-width="2">
                                <circle cx="16" cy="16" r="16" stroke="none"/>
                                <circle cx="16" cy="16" r="15" fill="none"/>
                                </g>
                            </g>
                            </svg>
                           <p>Bookmarks</p>
                       </li>
                       <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <g id="Group_27123" data-name="Group 27123" transform="translate(-1016.211 -524)">
                                <path id="Path_18643" data-name="Path 18643" d="M843,485.67a1,1,0,0,0-.86-.67l-5.69-.83L833.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L833,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(199.191 52.002)" fill="#00155a"/>
                                <g id="Ellipse_2136" data-name="Ellipse 2136" transform="translate(1016.211 524)" fill="none" stroke="#142a62" stroke-width="2">
                                <circle cx="16" cy="16" r="16" stroke="none"/>
                                <circle cx="16" cy="16" r="15" fill="none"/>
                                </g>
                            </g>
                            </svg>
                           <p>MG Coins</p>
                       </li>

                  </ul>
               </CardBody>
               <footer>
                 <div>
                   <ul className="social_icons">
                      <li><i class="fas fa-share-alt"></i><span>Share us</span></li>
                      <li><i class="fab fa-facebook-square"></i></li>
                      <li><i class="fab fa-twitter"></i></li>
                      <li><i class="fab fa-linkedin"></i></li>
                      <li><i class="fab fa-instagram"></i></li>
                   </ul>
                 </div>
               </footer>
               </div>
            </Card>
        </Container>
    )
}

export default Login
