const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51IczpSEgI7vCAhEbP6M6WfJ5vPU12PdzeU2YcmoadiKaRbCgTPGS4WpsRMDuukxhc48WI3vq9XKauaLtJ9A5AuiM002Jm4VYhU")
const cors = require('cors')



dotenv.config()


app.use(express.json())
app.use(cors())

const routeUrls = require('./routes.js')
app.use('/app', routeUrls )

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post("/donation", (req, res) =>{

    const {product, token} = req.body;
    console.log("product", product);
    console.log("price", product.price);
    const idempontencyKey = uuid()

    return stripe.customers.create({
        email:token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency:'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))

})

const port = process.env.PORT||5000;
mongoose.connect(process.env.DATABASECONNECTION)
.then(() => app.listen(port))

    
