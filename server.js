import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
})


app.get("/Day65", (req, res) => {
    res.send("Day65- 05-08-2026 learn about networking,JSON,DOM Tested the systems setup website made for KIET bootcamp.  How the query goes from browser to server, request return modes." )
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});