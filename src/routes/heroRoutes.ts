import express from "express";
import {
  createHero,
  deleteHero,
  getAllHeros,
  updateHero,
} from "../contorllers/heroController";

const router = express.Router();

router.route("/").get(getAllHeros).post(createHero);

router.route("/:id").patch(updateHero).delete(deleteHero);
