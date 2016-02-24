var express = require('express');
var app = express();
var path = require("path");


app.get("/", function(req, res) {
    
    //{"ipaddress":"62.42.167.183","language":"sl-SI","software":"Windows NT 10.0; Win64; x64"}
    var responseObj = {"ipaddress": null,"language": null,"software": null};
    
    /************************** IP **************************/
    var userIp = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
    
    responseObj.ipaddress = userIp;
    
    /*********************** LANGUAGE ***********************/
    var userLang = null;
    
    
    responseObj.language = userLang;
    
    /*********************** SOFTWARE ***********************/
    var userSoft = null;
    
    
    responseObj.software = userSoft;
    
    res.send(responseObj);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port + '...');
});