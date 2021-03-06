import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get("/seed", expressAsyncHandler(async (req, res) => {
     // await User.remove({});
  const createdUers = await User.insertMany(data.users);
  res.send({ createdUers });
}));

export default userRouter;
