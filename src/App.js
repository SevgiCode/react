import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Person from './Person';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './Register';
import Login from './Login';
import axios from 'axios';

axios.defaults.baseURL="http://127.0.0.1:8000/";
function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
       <Header/>
       <h1>Welcome</h1>
       <Routes>
       <Route exact path="/login" element={ <Login />}/>
        
       
       <Route exact path="/register" element={ <Register />}/>
        
       
       <Route exact path="/" element={<Person />}/>
         
      
       </Routes>
       </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
