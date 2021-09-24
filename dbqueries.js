const sqlite3 = require('sqlite3').verbose();

// Function to get from a database (READ)

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

// Function to post into the database (CREATE)

function createUser(db, req, res) {

    const { username, email, password } = req.body; //destructuring to get properties from req.body

    console.log(username, email, password);

    //Be mindful of passing form values to SQL, ??? and [username, email, password] are vital

    db.run(`INSERT INTO Users(name, email, password) values (?,?,?)`, [username, email, password],
        
        function(err) {

            if (err) {

                return console.log("There was an error inserting a user: ", err.message);
            
            }
            console.log(`${username} added to user field at position ${this.lastID}`);

            userID = this.lastID

            console.log("created new user " + userID);

            res.send({"ok":"ok"}); //this will log in the browse console
        });
}

module.exports = { getUsers, createUser }