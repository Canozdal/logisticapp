import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import  Axios  from "axios";

export const AssignPackages = () =>{
    const navigate = useNavigate();
    const [textAreaVal,setTextAreaVal] = useState();
    const [textAreaVal2,setTextAreaVal2] = useState();
    const [packageId,setPackageId] = useState();
    const [courierEmail,setCourierEmail] = useState();
    const [arrivalDate,setArrivalDate] = useState();
    const [departureDate,setDepartureDate] = useState();
    const location = useLocation();

    var packagesString = ""
    var courierString = ""
    var email = location.state["email"];

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
    const getCouriers = () =>{
        Axios.post("http://localhost:3005/getCouriers").then((response) =>{
            console.log(response);
            for(let i = 0;i < response.data["length"];i++){
                courierString += response.data[i.toString()]["id"] + " " + response.data[i.toString()]["name"] + " " + response.data[i.toString()]["email"] + "\n";
            }
            setTextAreaVal2(courierString);
        })
    }
    const createDelivery = () =>{
        Axios.post("http://localhost:3005/createdelivery",{email: courierEmail,packageId: packageId,arrivalDate: arrivalDate,departureDate: departureDate}).then(
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
            <p>Assign Packages</p>
            <br></br>
            <p>
                Courier
                <input onChange={(e) =>{
                    setCourierEmail(e.target.value);
                }}></input>
            </p>
            <p>
                Package
                <input onChange={(e) =>{
                    setPackageId(e.target.value);
                }}></input>
            </p>
            <p>
                Arrival Date
                <input onChange={(e) =>{
                    setArrivalDate(e.target.value);
                }}></input>
            </p>
            <p>
                Departure Date
                <input onChange={(e) =>{
                    setDepartureDate(e.target.value);
                }}></input>
            </p>
            <button onClick={() =>{
                createDelivery();
            }}>Create Delivery</button>
            <br></br>
            <textarea readonly="true"  id="textarea" value={textAreaVal} style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}>            </textarea>
            <textarea readonly="true"  id="textarea" value={textAreaVal2} style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}>            </textarea>
            <br></br>
            <button onClick={()=>{
                getPackages();
            }}>Get Packages</button>
            <button onClick={() =>{
                getCouriers();
            }}>Get Couriers</button>
            <button onClick={()=>{
                navigate(-1);
            }}>Back</button>
        </div>
    );
}