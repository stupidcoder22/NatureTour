import express from "express";
const app = express();
import blogrouter from "./routes/blogRoute";
import dotenv from "dotenv";
import connection from "./db/connection";
dotenv.config({ path: "./config.env" });

connection();
app.use(express.json());
app.use("/api/v1/tours", blogrouter);

app.listen(1000, () => {
  console.log("server is listening at 1000");
});
