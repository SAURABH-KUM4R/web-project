const express = require('express');
const { signup, signin } = require('../controllers/userController');
const signupValidator = require('../middleware/signup.validator');
const signinValidator = require('../middleware/signin.validator');

const userRouter = express.Router();

userRouter.post('/register',signupValidator,signup);
userRouter.post('/login',signinValidator,signin);

module.exports = userRouter;