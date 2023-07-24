const express = require('express');
const { signup, signin, getUser } = require('../controllers/userController');
const signupValidator = require('../middleware/signup.validator');
const signinValidator = require('../middleware/signin.validator');
const jwtAuth = require('../middleware/jwtAuth');

const userRouter = express.Router();

userRouter.post('/signup',signupValidator,signup);
userRouter.get('/',jwtAuth,getUser);
userRouter.post('/signin',signinValidator,signin);

module.exports = userRouter;