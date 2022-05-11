import express from "express";
const app = express();
import blogrouter from "./routes/blogRoute";

app.use(express.json());

app.use("/api/v1/tours", blogrouter);

app.listen(1000, () => {
  console.log("server is listening at 1000");
});
