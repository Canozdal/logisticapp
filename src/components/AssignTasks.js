import React from "react";
import { useNavigate } from "react-router-dom";

export const AssignTasks = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <p>Assign to: <input></input><button>Assign</button></p>
            <p><textarea   id="textarea" style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}></textarea></p>
            <button>Submit</button>
            <br></br>
            <button onClick={()=>{
                navigate(-1);
            }}> Back</button>
        </div>
    );
}