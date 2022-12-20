import React from "react";
import { useNavigate } from "react-router-dom";

export const SendPackage = () => {
    const navigate = useNavigate();
    return(
        <div align="center">
            <p>Send Package</p>
            <p> Address <input></input><button>Select</button></p>
            <p> Delivery Method <input></input> <button>Select</button></p>
            <p> Payment <input></input> <button>Select</button></p>
            <p> Weight of Package <input></input> <button>Select</button></p>
            <p> Heigth (Dimensionally) <input></input> <button>Select</button></p>
            <br></br>
            <p> In order to send package you will be accepting to <br></br> make a payment with the selected card.</p>
            <p> Price for shipping </p>
            <p> Delivery Fee</p>
            <p> Total</p>
            <p> <button>Send</button></p>
            <button onClick={()=> navigate(-1)}>Back</button>
        </div>
    );
}