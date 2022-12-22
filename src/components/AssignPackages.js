import React from "react";
import { useNavigate } from "react-router-dom";

export const AssignPackages = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <p>Assign Packages</p>
            <br></br>
            <p>
                Courier
                <input></input>
                <button>Assign</button>
            </p>
            <p>
                Package
                <input></input>
                <button>Assign</button>
            </p>
            <br></br>
            <button onClick={()=>{
                navigate(-1);
            }}>Back</button>
        </div>
    );
}