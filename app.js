const express = require('express')
const app = express()

app.get('/home', (req, res) => {
    res.send('<title>HOME</title><body><p>HOME</p>')
})

app.get('/student', (req, res) => {
    res.send('<title>STUDENT</title><body><p>STUDENT</p>')
})

app.get('/add-student', (req, res) => {
    res.send('<title>ADD-STUDENT</title><body><p>ADD-STUDENT</p>')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
