require('babel-register')({
    presets: ["env", "react", "stage-2", "es2015"],
    plugins: ["transform-class-properties"]
});

const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

const server = http.createServer(app);

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

require('./server/routes/routes')(app, path);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});