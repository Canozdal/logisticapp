import React from "react";
import { useNavigate } from "react-router-dom";

export const LastReports = () =>{
    const navigate= useNavigate();
    return(

        <div align="center">
                <p>Last Reports</p>
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