const user = require('../model/user')
// const mongoose = require('mongoose')

const addUser = async (req, res) => {
    try {
        const newUser = await new user(req.body)
        await newUser.save()
        res.status(200).json({ newUser: newUser})
    }
    catch (err) {
        console.log(err);
        res.status(404).json({ err: err })
    }
}

const GetAllUser =(req,res)=>{
    user.find().then(user=>{
        console.log(user)
        res.status(200).json({ user: user})
    }).catch(err=>{
        res.status(404).json({ err: err})
    })
}
module.exports = { addUser,GetAllUser }