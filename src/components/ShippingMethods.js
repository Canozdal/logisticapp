import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShippingMethods = () =>{
    const navigate = useNavigate();

    const [shippingMethod,setShippingMethod] = useState();
    return(
        <div align="center">
            <p>Shipping Methods</p>
            <input type="radio" name="shippingMethod" value="standard" onChange={e=>setShippingMethod(e.target.value)}/>Standard Delivery
            <input type="radio" name="shippingMethod" value="fast"/>Fast Delivery
            <br></br>
            <button onClick={() => navigate(-1)} >Back</button>
        </div>
    );
}