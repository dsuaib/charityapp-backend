const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

app.get('/', (req, res) => {
    res.send("Back end is hosted")
})

const PORT = process.env.PORT||5000;
mongoose.connect(process.env.DATABASECONNECTION, () => console.log("Connection to Database Successful!"))
    .then(()=> app.listen(PORT), () => console.log ("server is running!"))
    .catch((error) => console.log(error.message));
