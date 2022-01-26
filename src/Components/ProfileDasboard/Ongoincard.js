import React from 'react';
import {Container,Col,Row,Card,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import './dashboard.css'
const Ongoincard = ({bookid,bookdate,booktime,status,bookdetail}) => {
  return(
    <Card>
              <div className="mainongoincont p-3">
                  <div>
                      <div className="ongoingheader1">
                          <div className="bookdetails">
                              <small>Bookin ID</small>
                              <p>{bookid}</p>
                          </div>
                          <div className="bookdetails">
                              <small>Booking Date</small>
                              <p>{bookdate}</p>
                          </div>
                          <div className="bookdetails">
                              <small>Booking Time</small>
                              <p>{booktime}</p>
                          </div>
                      </div>
                      <div className='secondcontonbook'>
                          <div className="bookdetails1">
                            <small>Status</small>
                            <h3>{status}</h3>
                          </div>
                          <div className="bookdetails">
                          <small>Booking Details</small>
                            <p>{bookdetail}</p>
                          </div>
                      </div>
                  </div>
                  <div className="onbookfoot">  
                  <div>
                       <p className="ongoingbookicon"><i class="far fa-comments"></i></p>
                          <button className='ongoingbookbtn'>View all</button>
                      </div>
                </div>
              </div>
          </Card>
    )
};

export default Ongoincard;
