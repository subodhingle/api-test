const express = require('express');
const router = express.Router();
const {  registerUser,  } = require('../controllers/UserController.js');

//const protect = require('../middleware/authMiddlware.js')
//router.route('/').post(registerUser);
router.post('/', (req, res) => {
  
  post(registerUser)
  // Your route handling logic here
});

module.exports = router;