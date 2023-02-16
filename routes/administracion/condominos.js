/*
    Ruta: /api/v1/condominos
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getCondomino, createCondomino, updateCondomino, deleteCondomino} = require('../../controllers/administracion/condominos')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');

const router = Router();

router.get( '/',validarJWT,getCondomino);
router.post('/',validarJWT,createCondomino)
router.put('/:id', validarJWT, updateCondomino);
router.delete('/:id', validarJWT, deleteCondomino);

module.exports = router;