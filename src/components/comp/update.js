import './update.css'
import axios from 'axios';
import React from 'react';
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import BackGround from './../images/Result.png'
import Live from './../images/live.gif'

// import Updates from './Updates';



function Update(){

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
        <div className='update'>
            <table>
                
            <div className='Top'>
            <tr>
            <img src={BackGround} alt="logo" className='upback'/>
            </tr>
            </div>
            <tr>
            <div className='Mid'>
                <span className='Heading'>New Updates<img src={Live} alt="logo" className='live'/></span>
                {users.map((d, i) =>  (
            <tr key={i} className='data'>
              
              <td><li><Link to={`user/${d.id}`} style={{marginRight: "10px"}}>{d.Headline}</Link></li></td>
             
            </tr>
            
          ))}
        
            <Link to="user/list">View more</Link>

            </div>
            </tr>
            </table>
            <div className='card'>
            <table>
                
            <tr className="cards"> 
                <td><Card1/></td>
                <td><Card2/></td>
                <td><Card3/></td>
            </tr>
            
            </table>
            </div>
        </div>
       
)}
export default Update