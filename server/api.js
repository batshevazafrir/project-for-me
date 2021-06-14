const router = require("express").Router();
const user = require('./controller/one')
// const Admin = require('../controller/admin')
// const Weather = require('../controller/weather')

router.post('/addUser', user.addUser)
router.get('/GetAllUser', user.GetAllUser)


module.exports = router