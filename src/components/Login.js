import React,{Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import MuiAlert from '@material-ui/lab/Alert';

export const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    var userPrompt = "Test"
    var userMail = "Test"
    var userType = ""
    const loginFunc = () =>{
        Axios.post('http://localhost:3005/login',{email: email,password: password}).then((response) =>{
            if(response.data[0]["email"]){
                userPrompt = response.data[0]["name"]
                userMail = response.data[0]["email"]
                userType = response.data[0]["usertype"]
                console.log("Welcome " + response.data[0]["name"])
                console.log(userType);

            }else{

                console.log(response);
            }
        });
    }
    const navigate = useNavigate();
    const navigate2 = useNavigate();
    return(
        <body align="center">
            <div>
            <p> Login </p>
            </div>
            <div>
                <p>or login with e-mail</p>
                <p>E-mail</p>
                <input id="login_email_id" type="text" onChange={(e) => { setEmail(e.target.value)}}></input>
                <p> Password</p>
                <input id="login_passcode_id" type="text" onChange={(e) => { setPassword(e.target.value)}}></input>
                <p><button id="login_button" onClick={() => {
                    loginFunc();
                    console.log("Message to be transferred is : " + userPrompt);
                    if(userPrompt == "Test"){
                        return null;
                    }
                    if(userType == "Customer"){
                        navigate("landingpage",{state: {name: userPrompt,email: userMail}});
                    }else if(userType == "Employee"){
                        navigate("employeelandingpage",{state: {name: userPrompt,email: userMail}});
                    }else if(userType == "Courier"){
                        navigate("courierlandingpage",{state: {name: userPrompt,email: userMail}});
                    }else if(userType == "Admin"){
                        navigate("admin",{state: {name: userPrompt,email: userMail}});
                    }else{
                        console.log("Invalid user type.")
                    }

                    }}>Login</button></p>
                <p>Dont have an account?<Link to="register">register</Link> </p>
                <p><button onClick={ () =>{navigate2("employeelandingpage")}
                    
                    }>Test Employee Main Page</button></p>
                <p><button onClick={ () =>{navigate("courierlandingpage")}
                    
                }>Test Courier Main Page</button></p>
                <p><button onClick={ () =>{navigate("admin")}
                    
                }>Test Admin Main Page</button></p>
            </div>
        </body>


    );
}
