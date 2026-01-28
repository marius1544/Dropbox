import express from "express";
import { generateID } from "../dataObjects/user.mjs";
import user from "../dataObjects/user.mjs";
import { generateUsername } from "../dataObjects/user.mjs";

const userRouter = express.Router();
userRouter.use(express.json())

userRouter.post('/', (req, res) => {
  let newUser = user();
  newUser.id = generateID(); 
  newUser.username = "";
  
 if(newUser.username === ""){
  newUser.username = generateUsername("Marius");
  } else {
  console.log("After if", newUser.username = "");
}
  res.json(JSON.stringify(newUser));
})

userRouter.delete('/', (req, res) => {
 res.json(JSON.stringify(newUser));
})

export default userRouter;