const router = require('express').Router();
const {userRegister,userLogin} = require('../controller/authController');
router.post('/signup',userRegister);
router.post('/login',userLogin);
module.exports = router;