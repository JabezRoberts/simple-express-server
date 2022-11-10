const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messagges to my friends',
        friend: 'Luka Doncic',
    });
    // res.sendFile(path.join(__dirname,'..', 'public', 'images', 'meme.jpg'));
   // res.send('<ul><li>Hello, Albert!</li></ul>');
};


function postMessage(req, res) {
    console.log('Updating messages... ');
};

module.exports = {
    getMessages,
    postMessage
};

