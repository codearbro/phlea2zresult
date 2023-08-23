import './card.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

function Card3(){

  const [users, setUsers] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);

  function getUsers() {
      axios.get('https://database.resultpahle.com/users/').then(function(response) {
          console.log(response.data);
          setUsers(response.data);
      });
  }

    return(
        <div className='card'>
            <table>
                <thead>
                    <th className='cardHeading'>
                <span >Latest Job</span>
                </th>
                </thead>
                <tbody>
                {users.map((d, i) =>  (
            <tr key={i} className='carddata'>
              <td><li><Link to={`user/${d.id}`} style={{marginRight: "10px"}}>{d.Headline}</Link></li></td>
              </tr>
          ))}
          </tbody>
            </table>
        </div>
)}
export default Card3