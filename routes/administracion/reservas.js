const { Router } = require('express');
const { body } = require('express-validator');

const { getReserva, createReserva, updateReserva, deleteReserva } = require('../../controllers/administracion/reservas');
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getReserva);

router.post('/', [
    validarJWT,
    body('fecha_inicio', 'La fecha de inicio es obligatoria').not().isEmpty(),
    body('fecha_fin', 'La fecha de fin es obligatoria').not().isEmpty(),
    body('hora_inicio', 'La hora de inicio es obligatoria').not().isEmpty(),
    body('hora_fin', 'La hora de fin es obligatoria').not().isEmpty(),
    body('detalle_reserva', 'El detalle es obligatorio').not().isEmpty(),
    body('estado_reserva', 'El estado de la reserva es obligatorio').not().isEmpty(),
    body('estado', 'El estado es obligatorio').not().isEmpty(),
    validarCampos
], createReserva);

router.put('/:id', [
    validarJWT,
    body('fecha_inicio', 'La fecha de inicio es obligatoria').not().isEmpty(),
    body('fecha_fin', 'La fecha de fin es obligatoria').not().isEmpty(),
    body('hora_inicio', 'La hora de inicio es obligatoria').not().isEmpty(),
    body('hora_fin', 'La hora de fin es obligatoria').not().isEmpty(),
    body('detalle_reserva', 'El detalle es obligatorio').not().isEmpty(),
    body('estado_reserva', 'El estado de la reserva es obligatorio').not().isEmpty(),
    body('estado', 'El estado es obligatorio').not().isEmpty(),
    validarCampos
], updateReserva);

router.delete('/:id', validarJWT, deleteReserva);
module.exports = router;