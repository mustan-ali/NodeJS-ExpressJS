const e = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/testDatabase')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error Occured', err))


app.get('/', (req, res) => {
    res.end('Hello World')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})