/*
    Ruta: /api/v1/avisos
*/
const { Router } = require('express');
const { body } = require('express-validator');
const { getAviso, createAviso, updateAviso, deleteAviso} = require('../../controllers/comunicacion/avisos')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');

const router = Router();

router.get( '/',getAviso );
router.post('/',/* [
    validarJWT,
    body('asunto','El asunto es obligatorio').not().isEmpty(),
    validarCampos
], */createAviso)

router.put('/:id', [
    validarJWT,
    validarCampos
], updateAviso);

router.delete('/:id', validarJWT, deleteAviso);

module.exports = router;