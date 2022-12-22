import React from "react";
import { useNavigate } from "react-router-dom";

export const Employeelandingpage = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">Employee LandingPage
            <br></br>
            <button onClick={()=>{
                navigate("transactions");
            }}>Transactions</button>
            <br></br>
            <button onClick={()=>{
                navigate("assignpackages");
            }}>Assign Packages</button>
            <br></br>
            <button onClick={()=>{
                navigate(-1);
            }}>Log Out</button>
        </div>

    );
}