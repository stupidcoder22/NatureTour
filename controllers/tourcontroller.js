import { Tour } from "../Model/Tourschema";

//get all tour
export const getAlltours = async (req, res, next) => {
  try {
    const tour = await Tour.find();
    res.status(200).json({ status: "success", tour });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//specific tour by id
export const tourbyid = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({ status: "success", tour });
  } catch (error) {
    res.status(404).json({ status: "failed", error: error.message });
  }
};

//create tour
export const createtour = async (req, res, next) => {
  try {
    // const { name, rating, price } = req.body;
    const testtour = await Tour.create(req.body);
    res.status(200).json({ message: "successfull", testtour });
  } catch (error) {
    res.status(401).json({ error: error });
  }
};

//update tour
export const updatetour = async (req, res, next) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);
    if (!tour) {
      res
        .status(404)
        .json({ message: "Failed", message: "No such user was found" });
    }
    const updatetour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ message: "successfull", updatetour });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const deletetour = async (req, res, next) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);
    if (!tour) {
      res
        .status(404)
        .json({ message: "Failed", message: "No such user was found" });
    }

    const deleted = await Tour.findByIdAndDelete(id);
    res.status(200).json({ message: "successfull", deleted });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
