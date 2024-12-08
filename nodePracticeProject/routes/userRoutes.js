const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.listUsers); // Fetch and display users
router.get('/add', userController.showAddUserForm); // Show add user form
router.post('/add', userController.addUser); // Process form submission

module.exports = router;
