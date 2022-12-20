import React from "react";
import { useNavigate } from "react-router-dom";

export const CreditCards = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <p align= "center"> Credit Cards</p>
            <textarea readonly="true" style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}></textarea>
            <br></br>
            <button>Edit</button>
            <button onClick={() => navigate("addnewcard")}>Add a new card</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}