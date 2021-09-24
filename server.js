const express = require("express");
const app = express();
const dba = require("./rundbbuild.js");
const query = require("./dbqueries.js");
let db = dba.connect();
app.use(express.json());

app.use(express.static(__dirname + '/public')); //allows to add CSS to public

app.get('/api/users', function(req, res) {
    console.log("This is the res",res);
    query.getUsers(db, req, res);
});

app.post('/api/create-user', function(req,res) {
    console.log("This is the req",req.body);
    query.createUser(db,req,res);
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3001, () => {
    dba.init(db);
    console.log("Server is listening on port 3001");
});




