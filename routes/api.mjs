import express from "express";
export const postFiles = express.Router();

postFiles.post('/', (req, res) => {
  res.status(201).json({
    filename: 'picture1.png',
    status: 'not uploaded'
  })
})
