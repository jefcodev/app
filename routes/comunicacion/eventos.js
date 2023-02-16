/*
    Ruta: /api/v1/eventos
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getEvento, createEvento, updateEvento, deleteEvento} = require('../../controllers/comunicacion/eventos')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();


router.get( '/',validarJWT,getEvento);

router.post('/',[
    validarJWT,
    body('asunto','El asunto es obligatorio').not().isEmpty(),
    body('motivo', 'El motivo es obligatorio').not().isEmpty(),
    body('fecha_inicio', 'La fecha de inicio es obligatoria').not().isEmpty(),
    body('fecha_fin', 'La fecha de fin es obligatoria').not().isEmpty(),
    body('hora_inicio', 'La hora de inicio es obligatoria').not().isEmpty(),
    body('hora_fin', 'La hora de fin es obligatoria').not().isEmpty(),
    body('lugar', 'El lugar es obligatorio').not().isEmpty(),
    validarCampos

],createEvento);

router.put('/:id', [
    validarJWT,
    body('estado_evento', 'El estado del evento es obligatorio').not().isEmpty(),
    validarCampos
], updateEvento);


router.delete('/:id', validarJWT, deleteEvento);
module.exports = router;