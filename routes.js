const express = require('express')
const router = express.Router()
const registerMemberAccountCopy = require('./registerMemberModel')

router.post('/registermember', (request, response) => {
    const registeredMember = new registerMemberAccountCopy({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        username:request.body.username,
        password:request.body.password,
        age:request.body.age,
        donations:request.body.donations
    })
     registeredMember.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})


router.post('/createannouncement', async (request, response) => {
    const createdAnnoucement = new createAnnouncementCopy({
        fullName:request.body.fullName,
        title:request.body.title,
        message:request.body.message,
    })
    await createdAnnoucement.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports = router