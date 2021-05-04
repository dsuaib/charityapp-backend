const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
<<<<<<< Updated upstream



dotenv.config()
=======
const nodemailer = require('nodemailer');
const app = express();
>>>>>>> Stashed changes

dotenv.config()

app.use(express.json())
app.use(cors())




const routeUrls = require('./routes.js')
app.use('/app', routeUrls )

app.get('/', (req, res) => {
    res.send('hello world')
})

const port = process.env.PORT||5000;
mongoose.connect(process.env.DATABASECONNECTION)
.then(() => app.listen(port))

    
