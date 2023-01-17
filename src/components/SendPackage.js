import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios"

export const SendPackage = () => {

    const [width,setWidth] = useState();
    const [depth,setDepth] = useState();
    const [height,setHeight] = useState();
    const [weight,setWeight] = useState();
    const [pname,setPName] = useState();
    const [pdesc,setPDesc] = useState();

    const location = useLocation();
    var email = location.state["email"];
    console.log(email);

    const sendFunc = () =>{
        console.log("Weight: " + weight + " Height: " + height + " Depth: " + depth + " Width: " +width);
        console.log(Number(weight));
        Axios.post('http://localhost:3005/sendpackage',{width: width,height: height,depth: depth,weight: weight,email: email,pname: pname,pdesc: pdesc}).then((response) =>{
            console.log("Width: " + width)
            if(response.data){
                console.log("Successfully sent the package");
            }else{
                console.log(response);
            }
        });
    }
    const navigate = useNavigate();
    return(
        <div align="center">
            <p>Send Package</p>
            <p> Address <input></input><button>Select</button></p>
            <p> Delivery Method <input></input> <button>Select</button></p>
            <p> Payment <input></input> <button>Select</button></p>
            <p> Weight of Package <input onChange={(e)=>{
                setWeight(e.target.value);
            }}></input> <button>Select</button></p>
            <p> Heigth : <input id="sendpackage_height" onChange={(e) =>{setHeight(e.target.value);}}></input> Width: <input onChange={(e) =>{setWidth(e.target.value)}}></input> Depth: <input onChange={(e) => {setDepth(e.target.value);}}></input>
            <button onClick={() =>{
                console.log()
            }}>Select</button></p>
            <br></br>
            <p> Package Name : <input id="sendpackage_name" onChange={(e) =>{setPName(e.target.value);}}></input></p>
            <p> Package Desc : <input id="sendpackage_name_desc" onChange={(e) =>{setPDesc(e.target.value);}}></input></p>
            <p> In order to send package you will be accepting to <br></br> make a payment with the selected card.</p>
            <p> Price for shipping </p>
            <p> Delivery Fee</p>
            <p> Total</p>
            <p> <button onClick={() =>{
                sendFunc();
            }}>Send</button></p>
            <button onClick={()=> navigate(-1)}>Back</button>
        </div>
    );
}