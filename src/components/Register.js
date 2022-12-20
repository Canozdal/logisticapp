import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'
export const Register = () => {


    const [usertype,setUserType] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [phone,setPhone] = useState();
    const [name,setName] = useState();
    const navigate = useNavigate();

    const registerFunc = ( ) => {
        Axios.post('http://localhost:3005/register',{name: name,password: password, email: email,phone: phone})
        .then(() =>{
            console.log("Success");
        })
    }
    return(
        <body align="center">
            <div> 
                Register
                <p> Profile Picture</p>
            </div>
            <div>
                <p> Name</p>
                <input type="text" onChange={(e) => {
                    setName(e.target.value);
                    }}></input>
                <p> Email</p>
                <input type="text" onChange={(e) => {
                    setEmail(e.target.value);
                    }}></input>
                <p>Password</p>
                <input type="text" onChange={(e) => {
                    setPassword(e.target.value);
                    }}></input>
                <p>Phone </p>
                <input type="text" onChange={(e) => {
                    setPhone(e.target.value);
                    }}></input>
                <p> Account Type</p>
                <input type="radio" name="usertype" value="Customer" onChange={e=>setUserType(e.target.value)}/> Customer
                <input type="radio" name="usertype" value="Courier" onChange={e=>setUserType(e.target.value)}/> Courier
                <input type="radio" name="usertype" value="Employee" onChange={e=>setUserType(e.target.value)}/> Employee
                <input type="radio" name="usertype" value="Admin" onChange={e=>setUserType(e.target.value)}/> Admin
                <p> <button onClick={()=> {
                    registerFunc();
                    navigate("/");
                    }}>Register</button></p>
                <p> have an account? <Link to="/">sign in</Link></p>
            </div>
            
        </body>
    );
}
