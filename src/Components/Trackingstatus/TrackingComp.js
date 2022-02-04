import React from 'react'
import {Container,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader, CardFooter} from 'reactstrap';
    import {Link} from 'react-router-dom';
    import car from '../../Images/CarBrand/Models/1 Maruti Suzuki/A star.jpeg'
    import customerService from '../../Images/customer-service.png';
    import myuser from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/myuser.png';
    
    import './Track.css'
const TrackingComp = () => {
    return (
        <div>
            <Card className="trackcard d-flex rounded shadow-1">
              <div className="MainHeader">
                  <div className="card-head">
                     <p><img src={myuser} alt="error" width="70px" height="70px"/></p>
<div className="aboutUser">
<h5>I'm Aditya, your Service Advisor</h5>
<p>I will be helping you through this service</p>
<p><Link className='reviewcheck'>Booking ID: MG1234567890 </Link></p>
</div>
</div>
<div className="social">
    <Link><p className="socila1"><i class="fas fa-phone-alt"></i></p></Link>
    <Link><p className="socila1"><i class="far fa-comment"></i></p></Link>
</div>
              </div>
              <div className="carbody">
              <div>
                  <div className="cardfirst">
        <CardBody>
          <CardTitle className="cardtitle">Garage Details</CardTitle>
          <CardSubtitle className="cardsubtitle">Mahindra First Choice</CardSubtitle>
          <CardText className="cardText">Kandivali East, Mumbai 400101</CardText>
        </CardBody>
        <div className="share">
        <i class="far fa-share-alt"></i>
        </div>

        </div>
        <CardBody>
          <CardTitle className="cardtitle">Booking Date & Time</CardTitle>
          <CardText className="cardText">21/01/2021  at  11.00 AM</CardText>
        </CardBody>
        <CardBody>
          <CardTitle className="cardtitle">Appointment Date & Time</CardTitle>
          <CardText className="cardText">21/01/2021  at  11.00 AM</CardText>
        </CardBody>
        <CardBody>
          <CardTitle className="cardtitle">Pick Up & Drop Address</CardTitle>
          <CardSubtitle className="cardsubtitle">Sachin Tiwari</CardSubtitle>
          <CardText className="cardText">A-1234, CGC Residency, Near Bisleri office,
Andheri East, Mumbai - 400001<span style={{color:"red"}}>[Edit]</span></CardText>
        </CardBody>
        </div>
        <div>
        <CardBody>
            <div className="displayprop">
            <div>
          <CardTitle className="cardtitle">Vehicle Details</CardTitle>
          <CardSubtitle className="cardsubtitle">Maruti Suzuki  XL6 Petrol</CardSubtitle>
          <CardText className="cardText">MH 04 AB 3827</CardText>
</div>
<div>
    <img src={car} alt="error"/>
</div>
</div>
        </CardBody>
        <CardBody>
            <CardTitle className="cardtitle">Service Details</CardTitle>
            <CardText className="cardText">
                <ul typeof='radio'>
                    <li className="listitem">Starter Motor Repair</li>
                    <li className="listitem">Basic Service</li>
                    <li className="listitem">Engine Scanning</li>
                    <li className="listitem">Inspection & Diagnostics</li>
                </ul>
            </CardText>
        </CardBody>
        <CardBody style={{color:'#2650D8'}}>
           <span><i class="far fa-edit"></i></span> <Link>Add service instructions</Link>
        </CardBody>
        </div>
        </div>
        <CardFooter>
        <div className="Foot">
        <div  className="footer">
            <div>
            <svg id="Group_19281" data-name="Group 19281" xmlns="http://www.w3.org/2000/svg" width="74.541" height="43.6" viewBox="0 0 74.541 52.762">
  <path id="Path_18009" data-name="Path 18009" d="M1293.75,218.377A13.144,13.144,0,0,1,1280.6,231.52h-48.25a13.146,13.146,0,0,1-13.145-13.143V201.062a13.144,13.144,0,0,1,13.145-13.143h48.25a13.143,13.143,0,0,1,13.146,13.143v17.315Z" transform="translate(-1219.21 -187.919)" fill="#2650d8"/>
  <path id="Path_18010" data-name="Path 18010" d="M1244.522,277.276c-2.262,2.137-4.1,2.137-4.1,0s.015-5.639.02-7.779a4.013,4.013,0,0,1,4.1-3.888h8.2c2.252,0,2.247,1.751-.01,3.888S1246.779,275.139,1244.522,277.276Z" transform="translate(-1229.638 -226.117)" fill="#2650d8"/>
  <path id="Path_18011" data-name="Path 18011" d="M1270.071,216.894H1236.42v2.186h33.651Z" transform="translate(-1227.671 -202.165)" fill="#f4f8ff"/>
  <path id="Path_18012" data-name="Path 18012" d="M1265.481,227.349H1236.42v2.19h29.061Z" transform="translate(-1227.671 -207.306)" fill="#f4f8ff"/>
  <path id="Path_18013" data-name="Path 18013" d="M1255.7,237.8H1236.42v2.186H1255.7Z" transform="translate(-1227.671 -212.447)" fill="#f4f8ff"/>
  <path id="Path_18014" data-name="Path 18014" d="M1317.82,253.157c1.007-2.49,4.473-4.271,6.247-4.248h5.988c1.967.185,5.241,1.757,6.242,4.248a13.226,13.226,0,0,1-18.478,0Z" transform="translate(-1267.694 -217.907)" fill="#31241c"/>
  <path id="Path_18015" data-name="Path 18015" d="M1334.679,238.857s.574,4.711.966,7.373c.29,1.945-6.695,2.491-6.9.4-.183-2.487-.4-6.7-.4-6.7" transform="translate(-1272.866 -212.964)" fill="#ffc3bd"/>
  <path id="Path_18016" data-name="Path 18016" d="M1334.968,241.027l-.285-2.163-6.334,1.067s.066,1.295.158,2.92a5.989,5.989,0,0,0,1.393.274A6.109,6.109,0,0,0,1334.968,241.027Z" transform="translate(-1272.871 -212.967)" fill="#ab5d2d"/>
  <path id="Path_18017" data-name="Path 18017" d="M1320.323,219.827a6.112,6.112,0,1,0,12.19.908l.478-6.445a6.109,6.109,0,1,0-12.185-.911Z" transform="translate(-1268.916 -197.657)" fill="#ffc3bd"/>
  <path id="Path_18018" data-name="Path 18018" d="M1334.76,219.818a1.864,1.864,0,0,0-1.795-1c-.417.05-.422.7,0,.654a1.229,1.229,0,0,1,1.23.67C1334.394,220.525,1334.958,220.194,1334.76,219.818Z" transform="translate(-1274.986 -203.108)" fill="#31241c"/>
  <path id="Path_18019" data-name="Path 18019" d="M1323.2,219.4a1.407,1.407,0,0,1,1.225-.407c.406.1.584-.532.172-.631a2.074,2.074,0,0,0-1.86.575C1322.443,219.238,1322.906,219.7,1323.2,219.4Z" transform="translate(-1270.066 -202.864)" fill="#31241c"/>
  <path id="Path_18020" data-name="Path 18020" d="M1327.859,228.318a.245.245,0,0,1-.183-.082l-1.057-1.182a.253.253,0,0,1,.086-.4l1.276-.529a.248.248,0,0,1,.188.459l-.95.393.828.922a.251.251,0,0,1-.188.416Z" transform="translate(-1271.989 -206.696)" fill="#31241c"/>
  <path id="Path_18021" data-name="Path 18021" d="M1327.57,234.721c-.676,0-1.139-.72-1.4-2.2a.255.255,0,0,1,.066-.215.26.26,0,0,1,.214-.073,10.96,10.96,0,0,0,1.718.126c.391,0,.823-.016,1.311-.049a.261.261,0,0,1,.229.115.255.255,0,0,1,0,.255C1328.892,234.053,1328.2,234.721,1327.57,234.721Zm-.849-1.952c.208.932.514,1.457.849,1.457.219,0,.686-.192,1.459-1.394A13.017,13.017,0,0,1,1326.721,232.768Z" transform="translate(-1271.797 -209.706)" fill="#31241c"/>
  <path id="Path_18022" data-name="Path 18022" d="M1332.179,225.472a.743.743,0,1,0,.544-.9A.748.748,0,0,0,1332.179,225.472Z" transform="translate(-1274.744 -205.931)" fill="#1a191f"/>
  <path id="Path_18023" data-name="Path 18023" d="M1323.439,224.951a.744.744,0,1,0,.544-.9A.746.746,0,0,0,1323.439,224.951Z" transform="translate(-1270.446 -205.674)" fill="#1a191f"/>
  <path id="Path_18024" data-name="Path 18024" d="M1341.957,227.846a2.218,2.218,0,1,0,4.311,1.05l.168-.681a2.221,2.221,0,0,0-4.316-1.05Z" transform="translate(-1279.53 -206.382)" fill="#ffc3bd"/>
  <path id="Path_18025" data-name="Path 18025" d="M1334.312,214.1c.523-1.486,3.065-7.531-.717-7.713-.234-2.375-3.533-3.623-7.65-4.433s-6.689,1.123-6.379,3.052,2.847,2.633,4.849,2.061c.574,2.087,3.34,1.381,3.94.964.458,2.022,2.755,2.511,2.5,3.918s-.381,2.844-.432,3.131,1.149.846,1.413.274A2.274,2.274,0,0,1,1334.312,214.1Z" transform="translate(-1268.54 -194.727)" fill="#31241c"/>
  <path id="Path_18026" data-name="Path 18026" d="M1339.536,263.554c4.85-.192,10.05-3.28,11.087-8.294.041-.208-.279-.3-.32-.089-1,4.869-6.054,7.865-10.761,8.05C1339.322,263.233,1339.322,263.563,1339.536,263.554Z" transform="translate(-1278.293 -220.926)" fill="#fff"/>
  <path id="Path_18027" data-name="Path 18027" d="M1331.637,271.509c.884.033,1.774.049,2.658.069a.165.165,0,0,0,0-.33c-.884-.02-1.774-.036-2.658-.069C1331.423,271.172,1331.428,271.5,1331.637,271.509Z" transform="translate(-1274.41 -228.856)" fill="#fff"/>
  <path id="Path_18028" data-name="Path 18028" d="M1248.065,278.587c1.662-1.5,3.335-2.986,4.895-4.588a15.987,15.987,0,0,1,2.242-2.3,3.482,3.482,0,0,1,1.764-.439c1.189-.069,2.389-.036,3.578-.053,2.161-.03,4.321-.145,6.481-.142,2.318,0,4.631.109,6.944.215a90.955,90.955,0,0,0,13.516-.046c.208-.023.214-.353,0-.33a93.257,93.257,0,0,1-13.827.03c-2.419-.109-4.844-.2-7.269-.2-2.165,0-4.326.126-6.491.149-1.474.016-3.533-.31-4.86.529a12.518,12.518,0,0,0-2.094,2.124c-1.606,1.7-3.37,3.247-5.109,4.809C1247.674,278.5,1247.908,278.73,1248.065,278.587Z" transform="translate(-1233.258 -228.638)" fill="#fff"/>
</svg>

            </div>
            
            <div className="footerreview">
            <h5>How has your experience been?</h5>
            <div className="subFooter">
            <p><svg id="Group_19003" data-name="Group 19003" xmlns="http://www.w3.org/2000/svg" width="120.027" height="19.124" viewBox="0 0 156.027 19.124">
  <path id="Path_18641" data-name="Path 18641" d="M775,485.67a1,1,0,0,0-.86-.67l-5.69-.83L765.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L765,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18642" data-name="Path 18642" d="M809,485.67a1,1,0,0,0-.86-.67l-5.69-.83L799.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L799,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18643" data-name="Path 18643" d="M843,485.67a1,1,0,0,0-.86-.67l-5.69-.83L833.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L833,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18644" data-name="Path 18644" d="M877,485.67a1,1,0,0,0-.86-.67l-5.69-.83L867.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L867,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
  <path id="Path_18645" data-name="Path 18645" d="M911,485.67a1,1,0,0,0-.86-.67l-5.69-.83L901.9,479a1,1,0,0,0-1.8,0l-2.55,5.16-5.69.84a.988.988,0,0,0-.56,1.68l4.13,4-1,5.68a1,1,0,0,0,1.45,1.07l5.12-2.67,5.1,2.68a.937.937,0,0,0,.46.12,1.007,1.007,0,0,0,.936-.632,1,1,0,0,0,.054-.558l-1-5.68,4.13-4a1,1,0,0,0,.32-1.02Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a.995.995,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1.006,1.006,0,0,0,.76-.55L901,481.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" transform="translate(-755.006 -478.436)" fill="#ed7d2b"/>
</svg>
</p><Link className="reviewcheck">Write a review</Link>
</div>
 </div>
 </div>
            <div className="moreService">
                <div  className="customerServices">
                <p className="custam"><img src={customerService} alt="error"/></p>
                <div className="Needhelp">
                <h5>Need help with your booking?</h5>
                <p>Contact our Customer Support</p>
                </div>
                <Link><p className="comment"><i class="far fa-comments"></i></p></Link>
            </div>
            </div>
            </div>
        </CardFooter>
      </Card>
        </div>
    )
}

export default TrackingComp
