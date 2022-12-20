import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";

export const AddNewAddress = () =>{
    const navigate = useNavigate();

    const [address,setAddress] = useState()
    const [email,setEmail] = useState()

    const addNewAddress = () =>{
        Axios.post('http://localhost:3005/addshippingaddress',{email: email,address: address})
        .then(() => {
            console.log("success")
        })
    }
    return(
        <div align="center">
             <p>Add New Address</p>
             <p>Full Name</p>
             <input></input>
             <p>Email</p>
             <input onChange={(e) => setEmail(e.target.value)}></input>
             <p>Phone Number</p>
             <input></input>
             <p>Address</p>
             <input onChange={(e) => setAddress(e.target.value)}></input>
             <p>City</p>
             <input></input>
             <p>Post Code</p>
             <input></input>
             <button onClick={() => {
                addNewAddress();
                navigate(-1)}}>Add</button>
             <button onClick={() => navigate(-1)}>Back</button>
             </div>

    );
}