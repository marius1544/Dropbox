import express from "express";
export const postFiles = express.Router();
export const getFiles = express.Router();
postFiles.post('/', (req, res) => {
  res.status(201).json({
    filename: 'picture1.png',
    status: 'not uploaded'
  })
})



getFiles.get('/', (req, res) => {
  res.status(200).send('Success in finding');
  res.send(postFiles)
})
