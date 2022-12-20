import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const LandingPage = () =>{
    const navigate = useNavigate();
    return(
        <div align="center">
            <header>To be implemented</header>
            <br></br>
            <body>
                <div>
                    <button onClick={() => navigate("shippingaddresses")}>Shipping Addresses</button>
                    <br></br>
                    <button onClick={() => navigate("shippingmethods")}>Shipping Methods</button>
                    <br></br>
                    <button onClick={() => navigate("creditcards")}>Credit Cards</button>
                    <br></br>
                    <button onClick={() => navigate("trackorders")}>Track Orders</button>
                    <br></br>
                    <button onClick={() => navigate("sendpackage")}>Send Package</button>
                    <br></br>
                    <button onClick={()=> navigate("createcomplaint")}>Create Complaint</button>
                    <br></br>
                    <button onClick={() => navigate("findcheapest")}>Find Cheapest Cost</button>
                    <br></br>
                    <button onClick={() => navigate("contactcourier")}> Contact Courier</button>
                    <br></br>
                    <button onClick={() => navigate(-1)}> Log Out</button>
                </div>
            </body>
        </div>
    );
}