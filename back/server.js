const express = require('express');
const app = express();
var cors = require('cors')
const users = require('./users.json');

app.use(cors())

app.get("/api/users", (req, res) => {
    res.json(users);
})


app.listen(9000, () => {
    console.log("Server is running on port 9000 : http://localhost:9000")
});