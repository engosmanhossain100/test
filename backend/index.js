const express = require('express')
require('dotenv').config()
const app = express()
const router = require('./routers')
var cors = require('cors')

app.use(cors())
app.use(express.json());
app.use('/', router);

const port = process.env.PORT || 8000

app.listen(port)