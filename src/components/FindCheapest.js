import React from "react";
import { useNavigate } from "react-router-dom";

export const FindCheapest = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <div>
                <p>Destination City <input></input> <button>Select</button></p>
                <p>Arrival City <input></input> <button>Select</button></p>
            </div>
            <textarea readonly="true" style={{
                minHeight : 400,
                resize: "none"
            }}></textarea>
            <br></br>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}