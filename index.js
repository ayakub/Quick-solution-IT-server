const express = require('express');
const cors = require('cors')
const app = express()
const Port = process.env.Port || 5000;

app.use(cors());




const allCourses = require('./Data/courses.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(Port, () => {
    console.log(`Example app listening on port ${Port}`)
})