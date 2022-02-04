import React from 'react';
import {Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';
import AddVechicle from './AddVechiclebtn';

function Periodic(){
    return <>
    <div className='container-fluid px-5'>
        <Row>
                <div className='py-3'>
                    <Link to ="/HomeMain1"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/HomeMain1">Add services & Choose a garage</Link>
                </div>
            </Row>
            <Row>
                <Col sm={2} ><SideBar></SideBar></Col>
                <Col sm={6} ><MidBar></MidBar></Col>
                <Col sm={4} ><AddVechicle></AddVechicle></Col>
            </Row>

    </div>
            
    </>
}
export default Periodic;







