 import './logo.css'
 import React from 'react'
 import { Link} from 'react-router-dom';
// import Update from './update';

function Logo(){
    return(
        <>
        <table className='head'>
        <tr >
          <td className='logo'>  
              <span className="a1">RESULT</span> <span className="a2">PAHLE</span><br />
              <span className='des'>www.resultpahle.com</span>
            </td>
          <td className='nav'> 
            <li ><Link className='link' to="/">Home</Link></li>
            <li ><Link className='link' to="/result">Result</Link></li>
            <li ><Link className='link' to="/">Search</Link></li>
            </td> 
          </tr>
          </table>
 </>
)}
export default Logo