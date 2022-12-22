import React from "react";
import { useNavigate } from "react-router-dom";

export const CourierLandingPage = () =>{
    const navigate = useNavigate();
    return(

        <div align="center">
            <p>Packages</p>
            <button> GET</button><button onClick={()=>{
                navigate("taskdetails");
            }}>Task Details</button>
            <br></br>
            <textarea readonly="true"  id="textarea" style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}>
            </textarea>
            <br></br>
            <button onClick={()=>{
                navigate(-1);
            }}>Back</button>
        </div>

    );
}