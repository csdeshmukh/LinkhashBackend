const express = require("express");
const { connectDB } = require("../LinkhashBackend/DbConnection/dbConnection");
const app = express();

const cors = require("cors");

const http = require("http").createServer(app);
connectDB();
const port = process.env.PORT || 8082;
http.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`)
);
