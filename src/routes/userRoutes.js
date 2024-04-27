const { Router } = require("express");
const { newUserController } = require("../controllers/userController");

const userRouter = Router();

userRouter
  .post('/', newUserController)
module.exports = userRouter;