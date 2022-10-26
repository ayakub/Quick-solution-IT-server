const express = require('express');
const cors = require('cors')
const app = express()
const Port = process.env.Port || 5000;

app.use(cors());




const allCourses = require('./Data/courses.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/course', (req, res) => {
    res.send(allCourses)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = allCourses?.find(course => course.id == id);
    res.send(singleCourse)
})
app.get('/course/private/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = allCourses?.find(course => course.id == id);
    res.send(singleCourse)
})
app.listen(Port, () => {
    console.log(`Example app listening on port ${Port}`)
})