import fs from "fs";
import path from "path";
const __dirname = path.resolve();
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tourdata.json`));

//get all tour
export const getAlltours = (req, res, next) => {
  res
    .status(200)
    .json({ status: "success", result: tours.length, data: tours });
};

//specific tour by id
export const tourbyid = (req, res) => {
  const tourid = tours[req.params.id];
  res.status(200).json({ status: "success", tourid });
};

//create tour
export const createtour = (req, res) => {
  const Id = tours[tours.length - 1].id + 1;
  const newtour = Object.assign({ id: Id }, req.body);
  tours.push(newtour);
  fs.writeFile(`${__dirname}/tourdata.json`, JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: "success",
      data: { tour: newtour },
    });
  });
};
