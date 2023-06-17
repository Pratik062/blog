import express from "express";
import dotenv from "dotenv";

import connection from "./database/db.js";
import router from "./routes/route.js";

dotenv.config();

const app = express();

app.use("/", router);

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME, PASSWORD);
