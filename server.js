var express = require('express');
var app = express();
var path = require("path");

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname, '/client', '/index.html'));
});

app.get("/:id", function(req, res) {
    
    var id = String(req.params.id);
    var responseObj = {
        "unix": null,
        "natural": null
    };
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (/[0-9]{10}/.test(id)) {
        responseObj.unix = Number(id);

        var date = new Date(id * 1000);
        responseObj.natural = monthNames[date.getMonth()] + " " + date.getDay() + ", " + date.getFullYear();

    }
    else if (/(\w+\s\d+\,\s\d{4})/.test(id)) {

        var date = new Date(id);
        responseObj.unix = date.getTime()/1000;
        responseObj.natural = id;

    }

    console.log("Request", id);

    res.send(responseObj);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port + '...');
});