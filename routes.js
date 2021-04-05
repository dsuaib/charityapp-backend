const express = require('express')
const router = express.Router()
const createAnnouncementCopy = require('./createAnnouncementModel')
const registerMemberAccountCopy = require('./registerMemberModel')

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

module.exports = router