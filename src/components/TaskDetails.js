import  Axios  from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const TaskDetails = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const [arrivalDate,setArrivalDate] = useState();
    const [packageId,setPackageId] = useState();
    const [status,setStatus] = useState();
    var email = location.state["email"]
    
    const searchDelivery = () =>{
        Axios.post("http://localhost:3005/searchDelivery", {email: email,packageId:packageId}).then(
            (response) =>{
                if(response.data){
                    setArrivalDate(response.data[0]["arrivalDate"]);
                    setStatus(response.data[0]["status"]);
                }
            }
        )
    }
    const changeDeliveryStatus = () =>{
        Axios.post("http://localhost:3005/changeConfirmationDelivery", {email:email, status: status, packageId: packageId}).then(
            (response)=>{
                if(response.data){
                    console.log("Updated Status Successfully");
                }
                else{
                    console.log(response);
                }
            }
        )
    }
    return(
        <div>Task Details
            <p>Package ID: <input onChange={(e) =>{
                setPackageId(e.target.value);
            }}></input>
            <button onClick={() =>{
                searchDelivery();
            }}>Search</button></p>
            <p>Date of Arrival {arrivalDate}</p>
            <p>Status: {status}</p>
            <button onClick={() =>{
                setStatus("Confirmed");
                changeDeliveryStatus();
            }}>Package Sent</button>
            <button onClick={()=>{navigate(-1);}}>Back</button>
        </div>
    );
}