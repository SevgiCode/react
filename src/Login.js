import React, {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function Login()
{
const [email,setEmail]=useState('');
 const [password, setPassword]=useState('');
 const navigate= useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/")
        }
    }, [])
    async function login()
    {
     
        console.warn(email, password)
        let item = { email, password };
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/");
    }




    return (
       
        <div className="col-sm-6 offset-sm-3">
     <h1>Login</h1>
     <div className="card col-sm-6 offset-sm-3" >
         <br/>
     <input type="email" placeholder="email"  onChange={(e)=>setEmail(e.target.value)} value={email} />
     <br/>
     <input type="password" placeholder="password"  onChange={(e)=>setPassword(e.target.value)} value={password}/>
     <br/>
     </div>
     <button onClick={login}>Log In</button>
     
     </div>
   

    );
};
export default Login;