import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public"), { index: false }));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "public", "login.html"))
})

app.post("/login",(req,res)=>{
    username=req.body.username;
    pass=req.body.password;

    if(username=="vasanth" && pass=="vasanth@123"){
        res.sendFile(path.join(__dirname, "public", "index.html"))
    } else {
        res.send("You can't access the page. OKAY!");
        
    }
})

app.get("/Day65", (req, res) => {
    res.send("Day65- 05-08-2026 learn about networking,JSON,DOM Tested the systems setup website made for KIET bootcamp.  How the query goes from browser to server, request return modes." )
});



  export default app