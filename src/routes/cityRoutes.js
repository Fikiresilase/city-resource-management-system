const express = require('express')
const controller = require('../controllers/cityController')

const router = express.Router()

router.get('/', controller.list)
router.get('/:id', controller.get)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.patch('/:id', controller.patch)
router.delete('/:id', controller.remove)

module.exports = router
