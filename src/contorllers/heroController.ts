import { RequestHandler } from "express";

import Hero from "../models/heroModel";

export const getAllHeros: RequestHandler = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};

export const createHero: RequestHandler = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};

export const updateHero: RequestHandler = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};

export const deleteHero: RequestHandler = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};
