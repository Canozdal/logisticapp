import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ShippingAddress =()=>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <p>Shipping Addresses</p>
            <textarea readonly="true"  style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}></textarea>
            <br></br>
            <button>Edit</button>
            <button onClick={() => navigate("addnewaddress")}>Add New Address</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}