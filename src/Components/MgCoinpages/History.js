import React from 'react';
import { Table,Container,Row,Col } from 'reactstrap';
import './Deals.css';
import {Link} from 'react-router-dom';

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
]

const History = () => {
  return (
   <div className="history">
      <table className="borderchange">
      
        <tr className="bgchange1">
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        
            <tr className="datasection">
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
       
      </table>
    </div>
  );
};

export default History;
