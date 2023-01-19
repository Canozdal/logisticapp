import  Axios  from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CourierLandingPage = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const [textAreaVal,setTextAreaVal] = useState();
    const [packageId,setPackageId] = useState();
    const [arrivalDate,setArrivalDate] = useState();
    const [departureDate,setDepartureDate] = useState(); 

    var email = location.state["email"];
    var packagesString = "";

    const getPackages = () => {
        Axios.post("http://localhost:3005/getorderscourier").then(
            (response) =>{
                console.log(response);
                for(let i = 0; i < response.data["length"];i++){
                    packagesString += response.data[i.toString()]["idpackage"] + " " + response.data[i.toString()]["name"] + " " + response.data[i.toString()]["description"] + "\n";
                }   

                setTextAreaVal(packagesString);
            }
        )
    }
    const getDelivery = () =>{
        Axios.post("http://localhost:3005/getCourierDeliveries",{email: email}).then(
            (response)=>{
                if(response.data){
                    console.log("Successfully gathered deliveries.")
                    for(let i = 0; i < response.data["length"];i++){
                        packagesString += response.data[i.toString()]["packageid"] + " " + response.data[i.toString()]["name"] + " " + response.data[i.toString()]["description"] + " " + response.data[i.toString()]["status"]+ "\n";
                    }   
    
                    setTextAreaVal(packagesString);
                }else{
                    console.log(response);
                }

            }
        )
    }

    return(

        <div align="center">
            <p>Packages</p>
            <button onClick={() =>{
                getDelivery();
            }}> GET</button>
            <button onClick={()=>{
                navigate("taskdetails",{state: {email: email}});
            }}>Task Details</button>
            <br></br>
            <textarea readonly="true"  id="textarea" value={textAreaVal} style={{
                minHeight: 400,
                minWidth: 400,
                resize: "none"
            }}>
            </textarea>
            <br></br>

            <br></br>
            <button onClick={()=>{
                navigate(-1);
            }}>Back</button>
        </div>

    );
}