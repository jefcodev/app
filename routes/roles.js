/*
    Ruta: /api/v1/roles
*/
const { Router } = require('express');
const {check } = require('express-validator');

const { getRoles, createRol, updateRol} = require('../controllers/roles');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');



const router = Router();


router.get( '/' ,validarJWT, getRoles );
router.post('/',[

        check('descripcion','El campo debe estar llenor').not().isEmpty(),
        validarCampos
],createRol);
router.put('/',updateRol);



module.exports = router;