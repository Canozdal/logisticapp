import React from "react";
import { useNavigate } from "react-router-dom";
import ReactTextareaAutosize from "react-textarea-autosize";


export const ContactCourier = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <p> Contact Courier</p>
            <p> Package ID <input></input><button>Verify</button></p>
            <textarea style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}></textarea>
            <br></br>
            <button>Send </button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}