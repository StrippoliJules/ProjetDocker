const express = require('express');
const router = express.Router();
const { Article } = require('..');
const articlesController = require('../../controllers/articlesController');

router.get('/', articlesController.index);

module.exports = router;