const sqlite3 = require('sqlite3').verbose();

function getUsers(db, req, res) {
    db.all(`SELECT * FROM Users;`, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no users found" })
        }
        res.send(rows);
    })
}

// Task D12
function createUser(db, req, res) {

    const { username, email, password } = req.body;
    console.log(username, email, password);

    //Be midful of passing form values to SQL, ??? and [username, email, password] are vital

    db.run(`INSERT INTO Users(name, email, password) values (?,?,?)`, [username, email, password],
        function(err) {
            if (err) {
                return console.log("There was an error inserting a user: ", err.message)
            }
            console.log(`${username} added to user field at position ${this.lastID}`)
            userID = this.lastID
            console.log("created new user " + userID);
            res.send({"ok":"ok"});
        });
}

module.exports = { getUsers, createUser }