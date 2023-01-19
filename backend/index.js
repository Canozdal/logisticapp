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
    const usertype = req.body.usertype;

    console.log(name + " " + email + " " + password + " " + phone + " " + usertype);
    db.query('INSERT INTO users(name,email,password,phone,usertype) VALUES (?,?,?,?,?)',
    [name,email,password,phone,usertype],
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
app.post('/addshippingaddress',(req,res) =>{
    const email = req.body.email;
    const address = req.body.address;

    db.query("INSERT INTO shipping_addresses(email,address) VALUES (?,?) ",[email,address],
    (err,result) =>{
        if(err){
            console.log(err);
        }
    })
})

app.post('/addcreditcard',(req,res) =>{

    const name = req.body.name;
    const cvv = req.body.cvv;
    const exp_date = req.body.exp_date;
    const card_no = req.body.card_no;

    console.log(name);
    db.query("INSERT INTO credit_card(name,cvv,card_no,exp_date) VALUES(?,?,?,?) ", [name,cvv,card_no,exp_date],
    (err,result) =>{
        if(err){
            console.log(err);
        }
    })
})
app.post('/sendpackage',(req,res) =>{
    const weight = req.body.weight;
    const height = req.body.height;
    const width = req.body.width;
    const depth = req.body.depth;
    const name = req.body.pname;
    const desc = req.body.pdesc;
    const email = req.body.email;
    console.log(weight);
    db.query("INSERT INTO package(weight,height,depth,width,name,description,usermail) VALUES(?,?,?,?,?,?,?)", [Number(weight),Number(height),Number(depth),Number(width),name,desc,email],
    (err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    }
    )
})
app.post("/shippingaddresses", (req,res) => {
    const email = req.body.email;

    console.log(email);
    db.query("SELECT * FROM shipping_addresses WHERE email = ?",[email],(err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    })

})
app.post("/creditcards",(req,res) =>{
    const name = req.body.name;
    console.log(name);
    db.query("SELECT * FROM credit_card WHERE name = ?",[name],(err,result)=>{
        if(err){
            console.log(err);
        }if(result){
            res.send(result);
        }
    })
})
app.post("/setshippingmethod",(req,res) =>{
    const email = req.body.email;
    const shipping_method = req.body.shipping_method;
    db.query("INSERT INTO delivery_method(email,delivery_type) VALUES (?,?)",[email,shipping_method],(err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    })
})
app.post("/getshippingmethod", (req,res) =>{
    const email = req.body.email;
    db.query("SELECT * FROM delivery_method WHERE email = ?",[email],(err,result) =>{
        if(err){
            console.log(err)

        }if(result){
            res.send(result);
        }
    })
})
app.post("/getorders",(req,res) =>{
    const email = req.body.email;

    db.query("SELECT * FROM package WHERE usermail = ?",[email], (err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    })
})

app.post("/getorderscourier", (req,res) =>{
    db.query("SELECT * FROM package", (err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    })
})

app.post("/createdelivery", (req,res) =>{
    const email = req.body.email;
    const packageId = req.body.packageId;
    const departureDate = req.body.departureDate;
    const arrivalDate = req.body.arrivalDate;

    db.query("INSERT INTO delivery(packageid,email,departureDate,arrivalDate) VALUES(?,?,?,?)",[packageId,email,departureDate,arrivalDate], (err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    })
})

app.post("/searchDelivery", (req,res) =>{
    const email = req.body.email;
    const packageId = req.body.packageId;

    db.query("SELECT * FROM delivery WHERE email = ? AND packageid = ?",[email,packageId],(err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    })
})
app.post("/getCouriers", (req,res) =>{
    
    const str = "Courier"
    db.query("SELECT * FROM users WHERE usertype = ?",[str],(err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    })
})
app.post("/getCourierDeliveries", (req,res) =>{
    const email = req.body.email;

    db.query("SELECT * FROM delivery NATURAL JOIN package WHERE email = ?", [email], (err,result) =>{
        if(err){
            console.log(err);
        } if(result){
            res.send(result);
        }
    })
})

app.post("/changeConfirmationDelivery", (req,res) =>{
    const email = req.body.email;
    const packageid = req.body.packageId;
    const status = req.body.status;

    db.query("UPDATE delivery SET status = ? WHERE email = ? AND packageid = ?",[status,email,packageid], (err,result) =>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    })
})


app.listen(3005,() =>{
    console.log("Running on port 3005");
})

