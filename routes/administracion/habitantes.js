const { Router } = require('express');
const { body } = require('express-validator');

const { getHabitante, createHabitante, updateHabitante, deleteHabitante } = require('../../controllers/administracion/habitantes')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getHabitante);

router.post('/', [
    validarJWT,
    body('identificacion', 'La identificación es obligatoria').not().isEmpty(),
    body('nombres', 'Los nombres son obligatorios').not().isEmpty(),
    body('apellidos', 'Los apellidos son obligatorios').not().isEmpty(),
    body('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    body('direccion', 'La dirección es obligatoria').not().isEmpty(),
    body('fecha_nacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    body('genero', 'El género es obligatorio').not().isEmpty(),
    body('estado_civil', 'El estado civil es obligatorio').not().isEmpty(),
    body('nacionalidad', 'La nacionalidad es obligatoria').not().isEmpty(),
    body('parentesco', 'El parentesco es obligatorio').not().isEmpty(),
    body('estado', 'El estado es obligatorio').not().isEmpty(),
    body('id_usuario', 'El id de usuario es obligatorio').not().isEmpty(),
    validarCampos
], createHabitante);

router.put('/:id', [
    validarJWT,
    body('nombres', 'Los nombres son obligatorios').not().isEmpty(),
    body('apellidos', 'Los apellidos son obligatorios').not().isEmpty(),
    body('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    body('direccion', 'La dirección es obligatoria').not().isEmpty(),
    body('fecha_nacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    body('genero', 'El género es obligatorio').not().isEmpty(),
    body('estado_civil', 'El estado civil es obligatorio').not().isEmpty(),
    body('nacionalidad', 'La nacionalidad es obligatoria').not().isEmpty(),
    body('parentesco', 'El parentesco es obligatorio').not().isEmpty(),
    body('estado', 'El estado es obligatorio').not().isEmpty(),
    body('id_usuario', 'El id de usuario es obligatorio').not().isEmpty(),
    validarCampos
], updateHabitante);

router.delete('/:id', validarJWT, deleteHabitante);
module.exports = router;