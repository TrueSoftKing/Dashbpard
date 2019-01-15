// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 9000;
app.listen(port);
console.log('server started '+ port);

const processExitHandler = async (error) => {
    await this.destroy();
    if(error) console.log(error);
    process.exit(error ? 1 : 0);
  };
  
  process.on('exit', processExitHandler);
  process.on('SIGINT', processExitHandler); // Catches ctrl+c
  process.on('SIGUSR1', processExitHandler); // SIGUSR1 and SIGUSR2 are for `kill pid` (ex: nodemon restart)
  process.on('SIGUSR2', processExitHandler);
  process.on('uncaughtException', processExitHandler);