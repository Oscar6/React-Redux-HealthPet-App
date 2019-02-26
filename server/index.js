const twilio = require('twilio');

const express = require('express');
const bodyParser = require('body-parser');
const account = require('./auth');
const pino = require('express-pino-logger')();
const client = new twilio(account.account, account.token);


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});


app.post('/api/messages', (req, res) => {

  console.log(req.body)
  // res.send('hello');
    res.header('Content-Type', 'application/json');
    client.messages
    .create({
      from: account.number,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);