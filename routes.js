const express = require('express')
const router = express.Router()
const createAnnouncementCopy = require('./createAnnouncementModel')
const registerMemberAccountCopy = require('./registerMemberModel')
<<<<<<< Updated upstream
=======
const dotenv = require('dotenv')
var nodemailer = require('nodemailer');
const { restart } = require('nodemon')
const { db } = require('./createAnnouncementModel')
dotenv.config()
const stripe = require("stripe")(process.env.PRIVATE_KEY)

router.post("/donation", (req, res) =>{

    const {product, token} = req.body;
    console.log("product", product);
    console.log("price", product.price);

    return stripe.customers.create({
        email:token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency:'usd',
            customer: customer.id,
            receipt_email: token.email
        })
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))

})
>>>>>>> Stashed changes

router.post('/registermember', async (request, response) => {
    const registeredMember = new registerMemberAccountCopy({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        username:request.body.username,
        password:request.body.password,
        age:request.body.age,
        donations:request.body.donations
    })
    await registeredMember.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

<<<<<<< Updated upstream
=======
router.post('/login', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    
    var myDocument= db.members.findOne();

    if (myDocument){
        username = myDocument.username;
        return res.status(200).json(myDocument)
    }
    
    console.log('test')
    
    /*findOne({username: username, password: password}, function(err, user) {
        if(err) {
            console.log(err)
            return res.status(500).send();
        }

        if(!user) {
            return res.status(404).send();
        }

        return res.status(200).json(user)
    })*/
})


>>>>>>> Stashed changes
router.get('/member', (req, res) => {
    res.send('member')
})

router.get('/members', async (req, res) => {
    const member = await registerMemberAccountCopy.find()
    res.status(200).json(member)
})

router.get('/members/:id', async (req, res) => {
    var id = req.params.id
    const getmember = await registerMemberAccountCopy.findById(id)
    res.status(200).json( getmember)
    console.log(getmember)
})

router.post('/createannouncement', async (request, response) => {
    const createdAnnoucement = new createAnnouncementCopy({
        fullName:request.body.fullName,
        title:request.body.title,
        message:request.body.message
    })
    await createdAnnoucement.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

router.get('/announcements', async (req, res) => {
    const announcements = await createAnnouncementCopy.find()
    res.status(200).json(announcements)
})

router.get('/announcements/:id', async (req, res) => {
    var id = req.params.id
    const getAnnouncement = await createAnnouncementCopy.findById(id)
    res.status(200).json(getAnnouncement)
})

<<<<<<< Updated upstream
=======
router.post('/email', (req, res) => {
    var firstName = req.body.firstName;
    var username = req.body.username;
    var email = req.body.email;
    var message = req.body.message;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ait715casestudy@gmail.com',
            pass: 'Dummypa$$word'
        }
    })

    var messageDetails = ` ${firstName} has sent you a message! \n 
    Their username is: ${username} \n 
    Their email is: ${email} \n 
    ${message}`

      var mailOptions = {
          from: '"Customer Service" <ait715casestudy@gmail.com>',
          to: 'danisummer2000@gmail.com',
          subject: 'COVID Charity App Message',
          text: messageDetails
      };

      transporter.sendMail(mailOptions, function (error, info) {
          if (err){
          console.log(error)
          }else console.log(info)
          console.log('test1')
      })
      
      res.sendStatus(200)
      
  })

>>>>>>> Stashed changes
module.exports = router