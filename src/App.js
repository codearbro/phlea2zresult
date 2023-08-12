import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Details from './components/Details';
// import Updates from './components/comp/Updates';
// import Footer from './components/comp/footer';
// import CreateUser from './components/CreateUser';
// import EditUser from './components/EditUser';
// import ListUser from './components/ListUser';
// import Header from './components/comp/Header';
import Home from './components/Home';
import Result from './components/result';

function App() {
  return (
    <>  
     <div className="App">
     <BrowserRouter>
        <Routes>
         <Route index element={<Home />} />
         <Route path="result" element={<Result />} /> 
         <Route path="user/:id" element={<Details/>} />
       </Routes>
       </BrowserRouter>
      
    </div>
    
    </>
 
  );
}

export default App;
