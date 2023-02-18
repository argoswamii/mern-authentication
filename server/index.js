require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

//db
connection();

//middleware
app.use(express.json());
app.use(cors());

const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listening ${port}`));
