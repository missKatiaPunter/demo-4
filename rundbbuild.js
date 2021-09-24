const sqlite3 = require('sqlite3');

const connect = () => {
    let db = new sqlite3.Database('./db/mydb.sqlite', err => {
        if(err){
            console.log(err.message);
        }
        console.log("Connected to the database");
    })
    return db;
}

function init(db) {
    db.serialize(() => {
        db.run('create table users (userid INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT);', (err) => {
          if (err) { console.log(err) } else { console.log("Creating table users") }
        });
  });
}

module.exports = { connect, init };