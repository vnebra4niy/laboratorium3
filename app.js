const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

let students = []

app.post('/student', (req, res) => {
    const { firstName, lastName, major } = req.body
    students.push({ firstName, lastName, major })
    res.render('student', { firstName, lastName, major })
})

app.get('/student', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'student.ejs'))
})

app.get('/users', (req, res) => {
    res.render('users', { userList: students })
})

app.get('/add-student', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add-student.html'))
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});