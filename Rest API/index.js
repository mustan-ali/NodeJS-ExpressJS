/*
 GET /allUser  - Get all users
 POST /newUser - Add new user
 DELETE /delUser/:id - Delete user with id
 PUT /updateUser/:id - Update user info with id
 PATCH /patchUser/:id - Update partial user info with id
*/

const express = require('express');
const app = express();
const fs = require('fs')
const PORT = process.env.PORT || 3000;
const users = require('./MOCK_DATA.json')

app.get('/', (req, res) => {
    res.end('Hello World')
})


app.get('/allUser', (req, res) => {
    res.json(users)
})


app.use(express.json())

app.post('/newUser', (req, res) => {
    const body = req.body;
    users.push({ id: users.length + 1, ...body })

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) {
            return res.json({ message: "Error Occured while adding user" })
        }
        return res.json({ message: "User Added Successfully" })
    })
})


app.delete('/delUser/:id', (req, res) => {

    const userId = Number(req.params.id)
    const index = users.findIndex((u) => u.id === userId)

    if (index == -1) {
        return res.json({ message: `User with id: ${userId} not found` })
    }
    else {
        users.splice(index, 1)

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            if (err) {
                return res.status(500).json({ mesage: "Error Occured  while deleting user" })
            }
            return res.json({ message: `User with id: ${userId} deleted successfully` })
        })
    }
})


app.put('/updateUser/:id', (req, res) => {
    const userId = Number(req.params.id)
    const updateUser = req.body

    const index = users.findIndex((user) => user.id === userId)

    if (index !== -1) {
        users[index] = { ...users[index], ...updateUser }
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            if (err) {
                return res.status(500).json({ mesage: "Error Occured" });
            }
            return res.status(200).json({ mesage: "User Updated" });
        })
    }
    else {
        return res.json({ message: `"User not found with id ${userId}"` })
    }
})

app.patch('/patchUser/:id', (req, res) => {
    const userId = Number(req.params.id)
    const updateUser = req.body

    const index = users.findIndex((user) => user.id === userId)

    if (index !== -1) {
        users[index] = { ...users[index], ...updateUser }
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            if (err) {
                return res.status(500).json({ mesage: "Error Occured" });
            }
            return res.status(200).json({ mesage: "User Updated" });
        })
    }
    else {
        return res.json({ message: `"User not found with id ${userId}"` })
    }
})

app.listen(`${PORT}`)


/*
// Request Body for POST
    {
        "first_name": "John",
        "last_name": "Cena",
        "email": "mziemeckirr@slashdot.org",
        "gender": "Male"
    }

// Request Body for PUT
    {
        "first_name": "Hello",
        "last_name": "World",
        "email": "hello@world.org",
        "gender": "Male"
    }
    
// Request Body for PATCH
    {
        "first_name": "Tom",
        "last_name": "Jerry"
    }        
*/