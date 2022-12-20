import React from "react";
import { useNavigate } from "react-router-dom";

export const AddNewAddress = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">
             <p>Add New Address</p>
             <p>Full Name</p>
             <input></input>
             <p>Email</p>
             <input></input>
             <p>Phone Number</p>
             <input></input>
             <p>Address</p>
             <input></input>
             <p>City</p>
             <input></input>
             <p>Post Code</p>
             <input></input>
             <button onClick={() => navigate(-1)}>Add</button>
             <button onClick={() => navigate(-1)}>Back</button>
             </div>

    );
}