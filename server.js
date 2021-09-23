const express = require("express");
const app = express();
const dba = require("./rundbbuild.js");
let db = dba.connect();
app.use(express.json());

app.get('/users', (req, res) => {
    res.send("Here will be users!");
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3001, () => {
    dba.init(db);
    console.log("Server is listening on port 3001");
});




