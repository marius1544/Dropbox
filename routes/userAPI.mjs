import express from "express";
import { generateID } from "../dataObjects/user.mjs"
import user from "../dataObjects/user.mjs"
function generateUsername(userName){
  return userName;
}
const userRouter = express.Router();
userRouter.use(express.json())

userRouter.post('/', (req, res) => {
  let newUser = user();
  newUser.id = generateID(); 
  newUser.username = "";
  
 if(newUser.username === ""){
  newUser.username = generateUsername("Mariusr");
} else {
  console.log("After if", newUser.username = "");
}
  res.json(JSON.stringify(newUser));
})

export default userRouter;