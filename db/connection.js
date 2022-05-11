import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });

const connection = async () => {
  const connect = await mongoose.connect(process.env.MONGO);
  if (connect) {
    console.log("database is connected");
  }
};

export default connection;
