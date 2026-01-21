import { settingsPanel } from "../utils.mjs"

import express from "express";
export const settingsRouter = express.Router();
export const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
  res.send("Admin page");
  
})


settingsRouter.get('/', (req, res) => {
  res.send(settingsPanel);
})



export default settingsRouter;
