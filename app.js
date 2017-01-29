var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
})

app.get('/api', function (req, res) {

    res.json(require("./api/device.json"));
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
