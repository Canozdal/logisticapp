import React from "react";
import { useNavigate } from "react-router-dom";

export const TrackOrders=()=>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <p>Track Orders</p>
            <p> Package id: <input></input> <button>Select</button></p>
            <textarea readonly="true"style={{  
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}></textarea>
            <br></br>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}