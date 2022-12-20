import React from "react";
import { useNavigate } from "react-router-dom";

export const CreateComplaint = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <p> Create Complaint</p>
            <p> Package ID <input></input><button>Verify</button></p>
            <textarea style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}></textarea>
            <br></br>
            <button>Send </button>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}