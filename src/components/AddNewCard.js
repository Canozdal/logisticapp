import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddNewCard = () => {
    const navigate = useNavigate();
    const [cardType,setCardType] = useState();
    return(
        <div align="center">
            <p> Card Type</p>
            <input type="radio" name="cardType" value="Mastercard" onChange={e=>setCardType(e.target.value)}/>MasterCard
            <input type="radio" name="cardType" value="Visa" onChange={e=>setCardType(e.target.value)}/>Visa
            <input type="radio" name="cardType" value="Paypal" onChange={e=>setCardType(e.target.value)}/>Paypal
            <br></br>
            <p>Name on the card</p>
            <input></input>
            <p>Card Number</p>
            <input></input>
            <p>Expiration Date</p>
            <input></input>
            <p>CVV</p>
            <input></input>
            <br></br>
            <button onClick={()=>navigate(-1)}>Add</button>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}