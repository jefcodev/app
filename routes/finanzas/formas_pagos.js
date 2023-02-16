/*
    Ruta: /api/v1/formas_pagos
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getFormaPago, createFormaPago, updateFormaPago, deleteFormaPago} = require('../../controllers/finanzas/formas_pagos')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();


router.get( '/',validarJWT,getFormaPago );
router.post('/',[
    validarJWT,
    
    body('descripcion','La descripcion  es obligatorio').not().isEmpty(),
    
    validarCampos

],createFormaPago)

router.put('/:id', [
    validarJWT,
    body('descripcion','La descripcion  es obligatorio').not().isEmpty(),
    validarCampos
], updateFormaPago);

router.delete('/:id', validarJWT, deleteFormaPago);



module.exports = router;