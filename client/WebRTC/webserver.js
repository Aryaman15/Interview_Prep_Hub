const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname)));

app.get('/:userid', (req, res) => {
  const userId = req.params.userid;
  console.log(userId)
  res.sendFile(path.join(__dirname, 'lobby.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://${port}/`);
});
