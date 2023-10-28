const axios = require('axios');
const express = require('express');
const WebSocket = require('ws');

const app = express();

app.use(express.static('public'));

const getRates = async () => {
  let result;
  try {
    const response = await axios.get('');
    result = response.data.conversion_rates.RUB;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return result;
}

let lol = getRates();
console.log(lol);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/', (req, res) => {
    res.send(JSON.stringify(lol));
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})