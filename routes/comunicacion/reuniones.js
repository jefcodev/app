/*
    Ruta: /api/v1/reuniones
*/
const { Router } = require('express');
const { body } = require('express-validator');
const { getReunion, createReunion, updateReunion, deleteReunion} = require('../../controllers/comunicacion/reuniones')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');

const router = Router();

router.get( '/',validarJWT,getReunion );
router.post('/',[
    validarJWT,
    body('asunto','El asunto es obligatorio').not().isEmpty(),
    body('tema_tratar','El tema tratar es obligatorio').not().isEmpty(),
    body('fecha','El fecha es obligatorio').not().isEmpty(),
    body('hora','El hora es obligatorio').not().isEmpty(),
    body('lugar','El lugar es obligatorio').not().isEmpty(),
    body('link','El link es obligatorio').not().isEmpty(),
    body('estado_reunion','El estado reunion es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    validarCampos
],createReunion)

router.put('/:id', [
    validarJWT,
    body('asunto','El asunto es obligatorio').not().isEmpty(),
    body('tema_tratar','El tema tratar es obligatorio').not().isEmpty(),
    body('fecha','El fecha es obligatorio').not().isEmpty(),
    body('hora','El hora es obligatorio').not().isEmpty(),
    body('lugar','El lugar es obligatorio').not().isEmpty(),
    body('link','El link es obligatorio').not().isEmpty(),
    body('estado_reunion','El estado reunion es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    validarCampos
], updateReunion);

router.delete('/:id', validarJWT, deleteReunion);

module.exports = router;