const express = require('express')
const app = express()
app.use(express.json());
const mysql = require('mysql')

const cors = require('cors')
app.use(cors());
const db = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'logisticapp'

})

app.post('/register', (req,res) =>{
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;

    console.log(name + " " + email + " " + password + " " + phone);
    db.query('INSERT INTO users(name,email,password,phone) VALUES (?,?,?,?)',
    [name,email,password,phone],
    (err,result) => {if(err){
        console.log(err);
    }else{
        res.send("Values inserted.");
    }
    })
})

app.post('/login',(req,res) =>{
    const email = req.body.email
    const password = req.body.password
    console.log(email + " " + password);
    db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email,password],
    (err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
            console.log(result);
        }else{
            res.send({message: "Wrong Combination"})
            console.log("Wrong combination")
        }
    });

})
app.listen(3005,() =>{
    console.log("Running on port 3005");
})

