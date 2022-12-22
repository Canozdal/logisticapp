import React from "react";
import { useNavigate } from "react-router-dom";
export const Transaction = () => {
    const navigate = useNavigate();
    return(
        <div align="center">
            <p> Transactions</p>
            <p> Package ID: <input></input> <button>Search</button></p>
            <p>Feedback</p>
            <textarea   id="textarea" style={{
                minHeight: 400,
                minWidth: 300,
                resize: "none"
            }}>
            </textarea>
            <br></br>
            <button>Submit</button>
            <br></br>
            <button onClick={()=>{
                navigate(-1);
            }}>Back</button>
        </div>
    );
}