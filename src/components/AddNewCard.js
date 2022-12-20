import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";
export const AddNewCard = () => {
    const navigate = useNavigate();
    const [cardType,setCardType] = useState();
    const [name,setName] = useState();
    const [exp_date,setExpDate] = useState();
    const [cvv,setCvv] = useState();
    const [card_no,setCardNo] = useState();

    const addNewCard = () =>{
        Axios.post('http://localhost:3005/addcreditcard',{name: name,cvv: cvv,exp_date: exp_date,card_no: card_no}).then(
            ()=>{
                console.log("Succesful");
            }
        )
    }
    return(
        <div align="center">
            <p> Card Type</p>
            <input type="radio" name="cardType" value="Mastercard" onChange={e=>setCardType(e.target.value)}/>MasterCard
            <input type="radio" name="cardType" value="Visa" onChange={e=>setCardType(e.target.value)}/>Visa
            <input type="radio" name="cardType" value="Paypal" onChange={e=>setCardType(e.target.value)}/>Paypal
            <br></br>
            <p>Name on the card</p>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input>
            <p>Card Number</p>
            <input onChange={(e)=>setCardNo(e.target.value)}></input>
            <p>Expiration Date</p>
            <input onChange={(e)=> setExpDate(e.target.value)}></input>
            <p>CVV</p>
            <input onChange={(e)=>setCvv(e.target.value)}></input>
            <br></br>
            <button onClick={()=>{
                addNewCard();
                navigate(-1)}}>Add</button>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}