import React from "react";
import { useNavigate } from "react-router-dom";

export const Admin = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <p>Admin</p>
            <br></br>
            <button onClick={
                ()=>{
                    navigate("assigntasks");
                }
            }>Assign Tasks</button>
            <br></br>
            <button onClick={()=>{
                navigate("lastreports");
            }}>Last Reports</button>
            <br></br>
            <button>Generate Report</button>
            <br></br>
            <button onClick={
                () =>{
                    navigate(-1);
                }
            }>Logout</button>
        </div>

    );
}