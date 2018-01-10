var express = require('express'),
    app = express();

app
    .get('/', function (req, res) {
        res.sendFile('index.html', {root: "."});
    })

    .listen(8080, function () {
        console.log('Express server listening on port ' + this.address().port);
    });