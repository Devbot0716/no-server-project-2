const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express(),
      port = 3000;
      
      app.use(bodyParser.json());

      app.listen(port, function() {
  console.log("Started server on port", port);
});
