const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const router = require('./api')
const cors = require("cors")


const connectionParams = {
    // useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}
mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
    console.log('Connected!!!');
}).catch(err => {
    console.log(err);
})

app.use(bodyParser.json())

// app.use('/', function (req, res, next) {
//     console.log('middleWare');
//     console.log('the path is : ', req.path);
//     if (!req.path.startsWith('/login') && req.path !== 'signUp')
//         try {
//             console.log('All functions except login and signUp');
//             jwt.verify(req.headers['authorization'], process.env.SECRET)
//             console.log('jwt good');
//             next()
//         }
//         catch (err) {
//             console.log(err);
//             res.send('not login')
//         }
//     else {
//         next()
//     }
// })
app.use(cors())
app.use('/', router)
app.listen(9000, () => {
    console.log('listen to 9000!');
})

