const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Albert Einstein'
    },
    {
        id: 1,
        name: 'Sir Isaac Newton'
    }
]

app.get('/', (req, res) => {
    res.send('Heellloooo');
});


app.get('/friends', (req, res) => {
    res.send(friends);
});


app.get('/friends', (req, res) => {
    res.json(friends);
});


// GET /friends/22
app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId); // friendId is a string so convert to a number using Number() or add + to +req.params.friendId

    const friend = friends[friendId];
    
    if (friend) {
        //res.json(friend);
        res.status(200).json(friend);
    } else {
        //res.sendStatus(404);
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
});


app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello, Albert!</li></ul>');
});

app.post('/messages', (req, res) => {
    console.log('Updating messages... ');
});

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}...`);
});