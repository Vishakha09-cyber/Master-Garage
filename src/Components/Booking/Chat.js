import React from 'react'
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import avatar from '../../Images/avatar.png'
import profile from '../../Images/manprofile.png';
import send from '../../Images/send.png'
import './Chat.css'
const Chat = () => {
    return (
            <Container>
              <div className="chatcontainer mt-4 rounded">
                  <div className="chatheader p-2">
                     <p className="chatimg"><img src={avatar}/></p>
                     <div className="chatuser">
                         <h4>Customer Support- MG</h4>
                         <div className="ticketno">
                            <p className="logorestric"><svg xmlns="http://www.w3.org/2000/svg" width="14.525" height="14.525" viewBox="0 0 14.525 14.525">
                        <g id="Group_30375" data-name="Group 30375" transform="translate(-1088.5 -135.975)">
                            <path id="Path_22759" data-name="Path 22759" d="M423.763,262.525A6.763,6.763,0,1,0,417,255.763,6.763,6.763,0,0,0,423.763,262.525Z" transform="translate(672 -112.525)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            <path id="Path_22760" data-name="Path 22760" d="M427,263h.007" transform="translate(668.763 -117.058)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_22761" data-name="Path 22761" d="M427,255v4.149" transform="translate(668.763 -115.912)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        </g>
                        </svg></p>
                         <p>Ticket no. #012345</p>
                      </div>
                     </div>
                  </div>
                  <div className="contain">
                  <div className="senddata">
                    <div className="sendheader">
                    <div>
                            <div className="firstHeaer">
                                <p>How we can help you? Please select  a 
                                    query to continue from the following</p>
                            </div>
                            <div className="subissue">
                            <p>Payment related issue</p>
                            <p>Estimate related issue</p>
                            <p>Booking related issue</p>
                            <p>Service related issue</p>
                            </div>
                        </div>
                    </div>
                    <div className="sendimg">
                           <p><img src={avatar}/></p>
                        </div>
                  </div>
                  </div>
                  <div className="recivemessage">
                     <div className="maprofile"><img src={profile}/></div>
                     <div className="revivemessge"><p>I have payment related issue</p></div>
                  </div>
                     <div className="senddata">
                        <div className="resivefeed">
                           <p>Hello, I am Alex Morgan, 
                           I will be helping you with your issue today, 
                           Please explain me in detail about your issue</p>
                        </div>
                    <div className="sendimg1">
                           <p><img src={avatar}/></p>
                        </div>
                        
                  </div>
                  <div className="supportfooter">
                            <Input className="inputtext"/><p className="sendmessage"><img src={send}/></p>
                        </div>
              </div>
            </Container>
 
    )
}

export default Chat
