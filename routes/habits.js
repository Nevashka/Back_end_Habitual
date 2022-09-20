const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits')

router.get('/', habitsController.index)
router.get('/:id', habitsController.show)
router.patch('/:id', habitsController.patch)
router.delete('/:id', habitsController.destroy)

module.exports = router;
