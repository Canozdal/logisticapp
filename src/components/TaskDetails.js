import React from "react";
import { useNavigate } from "react-router-dom";

export const TaskDetails = () =>{
    const navigate = useNavigate();
    return(
        <div>Task Details
            <p>Package ID: <input></input><button>Search</button></p>
            <p>Date of Arrival</p>
            <button>Package Sent</button>
            <button onClick={()=>{navigate(-1);}}>Back</button>
        </div>
    );
}