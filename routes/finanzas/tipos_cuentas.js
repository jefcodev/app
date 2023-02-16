/*
    Ruta: /api/v1/fin_tipos_cuentas
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getTipoCuenta, createTipoCuenta, updateTipoCuenta, deleteTipoCuenta} = require('../../controllers/finanzas/tipos_cuentas')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();


router.get( '/',validarJWT,getTipoCuenta );
router.post('/',[
    validarJWT,
    body('descripcion','El descripcion es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    validarCampos

],createTipoCuenta)

router.put('/:id', [
    validarJWT,
    body('descripcion','El descripcion es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    validarCampos
], updateTipoCuenta);

router.delete('/:id', validarJWT, deleteTipoCuenta);



module.exports = router;