const express = require('express');
const app = express();
const bodyparser=require('body-parser')
const db=require('./db/db')
const router = require('./routes/router')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json())

/* mongodb */
db();

/* routes */
app.use('/user', router)

/* app listen */
app.listen("8000", () => {
    console.log("listen on port 8000");
})