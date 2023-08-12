import './card.css';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

function Card2(){

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
                <span >Result</span>
                </th>
                </thead>
                <tbody>
                {users.map((d, i) =>  (
            <tr key={i} className='carddata'>
              <td><li>{d.email}</li></td>
              </tr>
          ))}
          </tbody>
            </table>
        </div>
)}
export default Card2