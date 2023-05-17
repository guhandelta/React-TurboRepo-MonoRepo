const express = require("express");
const PORT = process.env.PORT || 4000;
var cors = require('cors')
var app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.json("Aloha, from the Backend")
})

app.listen(PORT, (err) => {
    if (err) console.log(error);
    else console.log(`Listening on Port:${PORT}`);
})