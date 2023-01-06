const express = require('express');
const notes = require("./data/notes");

const app = express();

app.get('/', (req,res) =>{
    res.send("API is ON.");
})

app.get("/api/notes",(req,res)=>{
    res.send(notes);
});

//req.params.id to fetch particular data from the data set.

app.listen(5000,console.log("Server started."));