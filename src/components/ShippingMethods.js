import  Axios  from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ShippingMethods = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    var email = location.state["email"];
    const [shippingMethod,setShippingMethod] = useState();


    const sendShippingMethod = () => {
        Axios.post('http://localhost:3005/setshippingmethod',{email:email,shipping_method: shippingMethod}).then(
            (response)=>{
                if(response){
                    console.log(response);
                }
            }
        )
    }

    return(
        <div align="center">
            <p>Shipping Methods</p>
            <input type="radio" name="shippingMethod" value="standard" onChange={e=>setShippingMethod(e.target.value)}/>Standard Delivery
            <input type="radio" name="shippingMethod" value="fast"/>Fast Delivery
            <br></br>
            <button onClick={() =>{
                console.log(shippingMethod);
                sendShippingMethod();
            }}>Send</button>
            <button onClick={() => navigate(-1)} >Back</button>
        </div>
    );
}