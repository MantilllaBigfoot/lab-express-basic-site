const express = require('express');

const app = express();

// __dirname = abs path to current file
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/german', (request, response) => {});

app.get('/german', (request, response) => {
  response.sendFile(__dirname + '/views/german.html');
});

app.get('/english', (request, response) => {
  response.sendFile(__dirname + '/views/english.html');
});

app.get('/spanish', (request, response) => {
  response.sendFile(__dirname + '/views/spanish.html');
});

//look inside the public dir
app.use(express.static('public'));
app.use(express.static('views'));

app.get('*', (request, response) => {
  response.send('Oh, there was a problem....site not reachable');
});

app.listen(3000);
