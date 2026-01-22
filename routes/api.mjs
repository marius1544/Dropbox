import express from "express";
export const postFiles = express.Router();
export const getFiles = express.Router();
export const changeFiles = express.Router();
export const deleteFiles = express.Router();
postFiles.post("/", (req, res) => {
  res
    .status(201)
    .json({
       body: {
         filename: "picture1.png",
         status: "not uploaded" 
    } });
});

changeFiles.put("/", (req, res) => {
  res.status(200).send("Changed the file or the status");
})

deleteFiles.delete("/", (req, res) => {
  res.status(200).send("Successfully deleted");
})

getFiles.get("/", (req, res) => {
  res.status(200).json(postFiles);
});
