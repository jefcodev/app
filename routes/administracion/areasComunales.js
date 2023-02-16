const { Router } = require('express');
const { body } = require('express-validator');

const { getAreaComunal, createAreaComunal, updateAreaComunal, deleteAreaComunal } = require('../../controllers/administracion/areasComunales');
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getAreaComunal);

router.post('/', [
    validarJWT,
    body('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    body('ubicacion', 'La ubicación es obligatoria').not().isEmpty(),
    body('capacidad', 'La capacidad es obligatoria').not().isEmpty(),
    body('maximo_hora_reserva', 'El máximo de horas de reserva es obligatorio').not().isEmpty(),
    body('estado_area_comunal', 'El estado de la área comunal es obligatorio').not().isEmpty(),
    body('foto', 'La foto es obligatoria').not().isEmpty(),
    body('estado', 'El estado es obligatorio').not().isEmpty(),
    body('usuario', 'El usuario es obligatorio').not().isEmpty(),
    validarCampos
], createAreaComunal);

router.put('/:id', [
    validarJWT,
    body('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    body('ubicacion', 'La ubicación es obligatoria').not().isEmpty(),
    body('capacidad', 'La capacidad es obligatoria').not().isEmpty(),
    body('maximo_hora_reserva', 'El máximo de horas de reserva es obligatorio').not().isEmpty(),
    body('estado_area_comunal', 'El estado de la área comunal es obligatorio').not().isEmpty(),
    body('foto', 'La foto es obligatoria').not().isEmpty(),
    body('estado', 'El estado es obligatorio').not().isEmpty(),
    body('usuario', 'El usuario es obligatorio').not().isEmpty(),
    validarCampos
], updateAreaComunal);

router.delete('/:id', validarJWT, deleteAreaComunal);
module.exports = router;