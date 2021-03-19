const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')


dotenv.config()


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
})

const port = process.env.PORT||5000;
mongoose.connect(process.env.DATABASECONNECTION)
.then(() => app.listen(port, () => console.log (`Database connected and server is running!: ${port}`)))
    
