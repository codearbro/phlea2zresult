import React from 'react'
import './Home.css'
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Updates from './comp/Updates';
// import Footer from './comp/footer';
// import Details from './Details'; 
// import CreateUser from './comp/CreateUser';



////css import
// import EditUser from './comp/EditUser';
// import Logo from './comp/logo';
import Logo from './comp/logo';
import Update from './comp/update';

function Home(){
   return(
       <>
       <div className='home'>       
       <Logo/>
      
       <Update/>
       </div>

       
</>
)}
export default Home