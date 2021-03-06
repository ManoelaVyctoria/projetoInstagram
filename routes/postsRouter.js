var express = require('express');
var router = express.Router();
const postsController = require('../Controller/postsController')

router.get('/', postsController.index);
router.post('/', postsController.create);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.delete);

module.exports = router;