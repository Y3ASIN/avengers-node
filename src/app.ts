import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const db_uri = process.env.DB_URI;
const db_pass = process.env.DB_PASS;


if (!db_uri || !db_pass) throw new Error("Environment variables are not set.");

const DB = db_uri.replace("<db_password>", db_pass);

mongoose.connect(DB).then(() => {
  console.log("DB Connection Successfull!");
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
