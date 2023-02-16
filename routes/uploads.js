const {Router} = require ('express');

const expressFileUpload = require('express-fileupload');


const { fileUpload } = require('../controllers/uploads');


const router = Router();

router.use(expressFileUpload())
router.put('/:tipo/:id', fileUpload)




module.exports = router;