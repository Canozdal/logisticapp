import  Axios  from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const TrackOrders=()=>{
    const navigate = useNavigate();
    const location = useLocation();

    const [textAreaVal,setTextAreaVal] = useState();

    var email = location.state["email"];
    var name = location.state["name"];

    const sendGetOrders = () =>{
        Axios.post("http://localhost:3005/getorders",{email: email}).then(
            (response) =>{
                console.log(response);
                var orderString = "";

                for(let i = 0; i < response.data["length"];i++){
                    orderString += response.data[i.toString()]["idpackage"] + " " + response.data[i.toString()]["name"] + " " + response.data[i.toString()]["description"] + "\n";
                }

                setTextAreaVal(orderString);
            }
        )
    }
    return(
        <div align="center">
            <p>Track Orders</p>
            <p> Package id: <input></input> <button onClick={()=>{
                sendGetOrders();
            }}>Select</button></p>
            <textarea readonly="true"style={{  
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }} value={textAreaVal}></textarea>
            <br></br>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}