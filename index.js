const express = require("express");

const app = express();
const cors = require("cors");

const http = require("http").createServer(app);

const port = process.env.PORT || 8082;
http.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`)
);
