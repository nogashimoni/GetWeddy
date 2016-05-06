var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Supplier = require('./models/Supplier');


var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};


// create server
var app = express();

app.use(bodyParser.json());

// connect to db
mongoose.connect('mongodb://10.10.20.188/some_database');

app.get('/', function (req, res) {
    res.send('Hello Get Weddy!')
});

app.get('/shalom', function (req, res) {
  res.send('Hello World')
});

app.get('/temp', function (req, res)
{
    res.sendFile('temp.html', options);
});

app.get('/suppliers', function(req, res) {
    Supplier.find({}, function (err, docs) {
        if (err) {
            res.send("Error");
        } else {
            res.send(docs);
        }
    });
});

app.post('/suppliers', function(req, res) {
    var supplier = new Supplier(req.body);

    supplier.save(function (err) {
        if (err) return res.status(500).send("ERROR");
        // (else)
        res.send("OK!");
    });

});


var port = 8080;
app.listen(port, function() {
    console.log("Listening on port " + port);
});
