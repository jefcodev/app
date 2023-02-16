const { Router } = require('express');
const { body } = require('express-validator');

const { getservicioBasico, createServicioBasico, updateServicioBasico, deleteServicioBasico } = require('../../controllers/administracion/serviciosBasicos');
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getservicioBasico);

router.post('/', [
    validarJWT,
    body('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    body('estado', 'El estado es obligatorio').not().isEmpty(),
    body('id_usuario', 'El id del usuario es obligatorio').not().isEmpty(),
    validarCampos
], createServicioBasico);

router.put('/:id_servicio_basico', [
    validarJWT,
    body('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    body('estado', 'El estado es obligatorio').not().isEmpty(),
    body('id_usuario', 'El id del usuario es obligatorio').not().isEmpty(),
    validarCampos
], updateServicioBasico);

router.delete('/:id_servicio_basico', validarJWT, deleteServicioBasico);

module.exports = router;