import express from "express";

const app = express();


app.get("/",(req,res)=>{
    res.sendFile("./public/index.html")
})


app.get("/Day65", (req, res) => {
    res.send("Day65- 05-08-2026 learn about networking,JSON,DOM Tested the systems setup website made for KIET bootcamp.  How the query goes from browser to server, request return modes." )
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});