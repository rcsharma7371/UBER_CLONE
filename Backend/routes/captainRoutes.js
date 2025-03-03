const express = require('express');
const { body } = require('express-validator');
const { registerCaptain } = require('../controllers/captainController');
const router = express.Router();

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isString().isLength({min:3}).withMessage('First Name must be atleat 3 characters long'),
    body('password').isString().isLength({min:6}).withMessage('Password must be atleat 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be atleat 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleat 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')
],registerCaptain);


module.exports = router;