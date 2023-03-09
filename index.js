const express = require('express');
const cors = require('cors');
const { request } = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello from node js change your code ')

});
const users = [
    { id: 1, name: 'sabna', email: 'shaban@gmail.com', phone: '011111111' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '011111111' },
    { id: 3, name: 'sabnam', email: 'sabna@gmail.com', phone: '011111111' },
    { id: 4, name: 'madhuru', email: 'madhuru@gmail.com', phone: '011111111' },
    { id: 5, name: 'bobita', email: 'bobita@gmail.com', phone: '011111111' },
    { id: 6, name: 'champa', email: 'champa@gmail.com', phone: '011111111' },
    { id: 7, name: 'rituborna', email: 'rituborna@gmail.com', phone: '011111111' }
]
app.get('/user', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})
app.post('/user', (req, res) => {

    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    user.push(user);
    res.send(user)
})

app.get('/fruits/fruits', (req, res) => {
    res.send(['apple', 'mango', 'orange', 'papea'])
})

app.listen(port, () => {
    console.log('Listening to port', port);
})