const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

let students = []

app.get('/home', (req, res) => {
  res.send('<title>HOME</title><body><p>HOME</p></body>')
})

app.get('/add-student', (req, res) => {
    const htmlCode=`
    <title>ADD-STUDENT</title>
    <body>
        <p>ADD-STUDENT</p>
        <form action="/student" method="POST">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName"><br><br>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName"><br><br>
            <label for="major">Major:</label>
            <input type="text" id="major" name="major"><br><br>
            <button type="submit">Submit</button>
        </form>
    </body>
    `
  res.send(htmlCode);
})

app.post('/student', (req, res) => {
  const { firstName, lastName, major } = req.body
  const greeting = `Hello, ${firstName} ${lastName} on ${major} studies!`
  students.push({ firstName, lastName, major })
  res.send(greeting)
});

app.get('/users', (req, res) => {
  const userList = students.map(student => `<p>${student.firstName} ${student.lastName} - ${student.major}</p>`)
  res.send(`<title>USERS</title><body><ul>${userList.join('')}</ul></body>`)
})

app.post('/student', (req, res) => {
  const { firstName, lastName, major } = req.body
  const greeting = `Hello, ${firstName} ${lastName} on ${major} studies!`
  students.push({ firstName, lastName, major })
  res.send(greeting)
});

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})