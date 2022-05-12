import express from "express";
import {
  createtour,
  deletetour,
  getAlltours,
  tourbyid,
  updatetour,
} from "../controllers/tourcontroller";

const router = express.Router();

router.get("/", getAlltours);

router.get("/:id", tourbyid);

router.post("/", createtour);

router.patch("/:id", updatetour);

router.delete("/:id", deletetour);

export default router;
