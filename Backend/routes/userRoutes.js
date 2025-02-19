const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const userControler = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be 3 character long"),
    body('password').isLength({min:6}).withMessage('Password must be 6 character log')
],userControler.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("password must between 8 characters")
],userControler.loginUser)


router.get('/profile',authMiddleware.authUser,userControler.getProfile)

router.get('/logout',authMiddleware.authUser,userControler.logout)

module.exports = router