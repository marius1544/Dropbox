/* const whiteColorElement = document.createElement("div");
whiteColorElement.style.backgroundColor = "#ff0000";

const settingsVar = {
    lightmode: whiteColorElement,
    darkmode: backGroundBlack
} */

import express from "express";
export const settingsRouter = express.Router();

settingsRouter.get('/', (req, res) => {
  res.send("settings are updated");
})


export default settingsRouter;
