import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Employeelandingpage = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    var email = location.state["email"]

    return(
        <div align="center">Employee LandingPage
            <br></br>
            <button onClick={()=>{
                navigate("transactions");
            }}>Transactions</button>
            <br></br>
            <button onClick={()=>{
                navigate("assignpackages",{state: {email: email}});
            }}>Assign Packages</button>
            <br></br>
            <button onClick={()=>{
                navigate(-1);
            }}>Log Out</button>
        </div>

    );
}