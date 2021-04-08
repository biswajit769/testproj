const express = require('express');
const router = express.Router();
const usecasesController = require('../controllers/usecases');
const auth = require('../middleware/auth');

const { authorIdValidator, postAuthorValidator } = require('../middleware/validators');

// @route GET /authors
// @desc gets a list of all authors
router.get('/', usecasesController.getUsecases);


module.exports = router;
