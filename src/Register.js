import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


function Register(){
useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
        navigate("/")
    }
},[])
const [name,setName]= useState("")
const [email,setEmail]= useState("")
const [password,setPassword]= useState("")
const navigate= useNavigate(); 
async function SignUp()
{
    let item = {name,email,password}
    console.warn(item)

    let result = await fetch("http://127.0.0.1:8000/api/register",{
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            "Content-Type" : 'application/json',
            "Accept" :'applications/json'
        }
    })
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate("/")  
}

    return(
        <div className="col-sm-6 offset-sm-3">
            <div className="card col-sm-6 offset-sm-3">
                <div >
                <h1 className="card-header" style={{backgroundColor:"info"}}>Register</h1>
                </div>
     
     
     <br/>
     <input type="text" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)}/>
     <br/>
     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
     <br/>
     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
     <br/>
     </div>
      <button onClick={SignUp}>Sign in</button> 
      {/* {
          name ? <p>Welcome {name}!</p>
          :
          ''
      } */}
     </div>
    );
}
export default Register;