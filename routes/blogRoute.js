import express from "express";
import {
  createtour,
  getAlltours,
  tourbyid,
} from "../controllers/tourcontroller";

const router = express.Router();

router.get("/", getAlltours);

router.get("/:id", tourbyid);

router.post("/", createtour);

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

export default router;
