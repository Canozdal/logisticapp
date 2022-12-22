import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import  Axios from "axios";


export const ShippingAddress =(props)=>{
    const location = useLocation();
    console.log(location);
    var email = location.state["email"]
    var name = location.state["name"]

    const [textAreaVal,setTextAreaVal] = useState();

    const navigate = useNavigate();
    var addresses = [];
    const getShippingAddresses = () =>{
        Axios.post('http://localhost:3005/shippingaddresses',{email : email}).then(
            (response) =>{
                console.log(response);
                var addressString = "";
                for (let i = 0; i < response.data["length"]; i++) {
                    addresses.push(response.data[i.toString()]["address"]);
                    addressString += response.data[i.toString()]["address"] + "\n";
                  }

                console.log(addressString);
                

                setTextAreaVal(addressString)
                
            }
        )
    }

    return(
        <div align="center">
            <p>Shipping Addresses</p>
            <textarea readonly="true"  id="textarea" value={textAreaVal} onChange={(e) => setTextAreaVal(e.target.value)}style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}>
            </textarea>
            <br></br>
            <button onClick={() => getShippingAddresses()}>GET</button>
            <button onClick={() => navigate("addnewaddress")}>Add New Address</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}