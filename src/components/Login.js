import React,{Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";


export const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const loginFunc = () =>{
        Axios.post('http://localhost:3005/login',{email: email,password: password}).then((response) =>{
            if(response.data.email){
                console.log(response.data[0].id);
            }else{
                console.log(response);
            }
        });
    }
    const navigate = useNavigate();
    return(
        <body align="center">
            <div>
            <p> Login </p>
            <p> Access account</p>
            <p> <button>facebook</button><button>google</button></p>
            </div>
            <div>
                <p>or login with e-mail</p>
                <p>E-mail</p>
                <input id="login_email_id" type="text" onChange={(e) => { setEmail(e.target.value)}}></input>
                <p> Password</p>
                <input id="login_passcode_id" type="text" onChange={(e) => { setPassword(e.target.value)}}></input>
                <p><button id="login_button" onClick={() => {
                    loginFunc();
                    navigate("landingpage");

                    }}>Login</button></p>
                <p>Dont have an account?<Link to="register">register</Link> </p>
            </div>
        </body>


    );
}
