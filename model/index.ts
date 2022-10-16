import express from 'express';
import mongoose from 'mongoose';
import router from './router';
import fileUpLoad from 'express-fileupload';

const PORT = process.env.PORT || 5000;
const CONNECTION_STRING = `mongodb+srv://webmaster:1234regd@cluster0.axaqlfn.mongodb.net/?retryWrites=true&w=majority`;

const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpLoad({}))
app.use('/', router) 

app.use(express.json())

async function startApp() {
    try {
        await mongoose.connect(CONNECTION_STRING)
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

startApp()