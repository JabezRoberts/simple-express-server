const express = require('express');

const friendsController = require('../controllers/friends-controller');
const messagesController = require('../controllers/messages-controller');

const app = express();

const PORT = 3000;


// Middleware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url}`);
});



app.use(express.json());





// app.get('/', (req, res) => {
//     res.send('Heellloooo');
// });


// app.get('/friends', (req, res) => {
//     res.send(friends);
// });


app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends );
// GET /friends/22
app.get('/friends/:friendId', friendsController.getFriend );


app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage );

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}...`);
});