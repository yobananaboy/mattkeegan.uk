const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.use(express.static('public'))

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});