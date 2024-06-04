const express = require('express')
const route = express.Router()

route.get('/api', function(req, res){
    res.send("hlw ami api index")
})

module.exports = route