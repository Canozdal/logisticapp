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
    const createDelivery = () =>{
        Axios.post("http://localhost:3005/createdelivery",{email: email,packageId: packageId,arrivalDate: arrivalDate,departureDate: departureDate}).then(
            (response)=>{
                if(response.data){
                    console.log("Successfully created a delivery.")
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
                getPackages();
            }}> GET</button>
            <button onClick={()=>{
                navigate("taskdetails",{state: {email: email}});
            }}>Task Details</button>
            <br></br>
            <textarea readonly="true"  id="textarea" value={textAreaVal} style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}>
            </textarea>
            <br></br>
            <input onChange={
                (e) =>{
                    setPackageId(e.target.value);
                }
            } placeholder="Enter the package id for choosing a package"></input>
            <br></br>
            <input onChange={
                (e) =>{
                    setArrivalDate(e.target.value);
                }
            } placeholder="Enter the arrival date"></input>
            <br></br>
            <input onChange={
                (e) =>{
                    setDepartureDate(e.target.value);
                }
            }   placeholder="Enter the departure date"></input>
            <br></br>
            <button onClick={() =>{
                createDelivery();
            }}>Assign</button>
            <br></br>
            <button onClick={()=>{
                navigate(-1);
            }}>Back</button>
        </div>

    );
}