import fs from "fs";
import path from "path";
import { Tour } from "../Model/Tourschema";
const __dirname = path.resolve();

//get all tour
export const getAlltours = (req, res, next) => {
  res.status(200).json({ status: "success" });
};

//specific tour by id
export const tourbyid = (req, res) => {
  res.status(200).json({ status: "success" });
};

//create tour
export const createtour = (req, res) => {
  const { name, rating, price } = req.body;
  const testtour = new Tour({ name, rating, price });
  testtour
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.log(err);
    });
};
