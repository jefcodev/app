/*
    Ruta: /api/v1/reclamos
*/
const { Router } = require('express');
const { body } = require('express-validator');
const { getReclamo, createReclamo, updateReclamo, deleteReclamo} = require('../../controllers/comunicacion/reclamos')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');
const router = Router();

router.get( '/',validarJWT,getReclamo );

router.post('/',[
    validarJWT,
    body('asunto','El asunto es obligatorio').not().isEmpty(),
    body('descripcion', 'La descripción es obligatorio').not().isEmpty(),
    body('fecha', 'La fecha es obligatorio').not().isEmpty(),
    body('hora', 'La hora es obligatorio').not().isEmpty(),
    body('lugar', 'El lugar es obligatorio').not().isEmpty(),
    validarCampos
],createReclamo);

router.put('/:id', [
    validarJWT,
    body('asunto','El asunto es obligatorio').not().isEmpty(),
    body('descripcion', 'La descripción es obligatorio').not().isEmpty(),
    body('fecha', 'La fecha es obligatorio').not().isEmpty(),
    body('hora', 'La hora es obligatorio').not().isEmpty(),
    body('lugar', 'El lugar es obligatorio').not().isEmpty(),
    validarCampos
], updateReclamo);

router.delete('/:id', validarJWT, deleteReclamo);

module.exports = router;