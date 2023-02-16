/*
    Ruta: /api/v1/fin_cuentas
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getCuenta, createCuenta, updateCuenta, deleteCuenta} = require('../../controllers/finanzas/cuentas')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();


router.get( '/',validarJWT,getCuenta );
router.post('/',[
    validarJWT,
    body('nombre','El nombre es obligatorio').not().isEmpty(),
    body('banco','El banco es obligatorio').not().isEmpty(),
    body('numero_cuenta','El numero cuenta es obligatorio').not().isEmpty(),
    body('fecha_apertura','El fecha apertura es obligatorio').not().isEmpty(),
    body('moneda','El moneda es obligatorio').not().isEmpty(),
    body('saldo_inicial','El saldo inicial es obligatorio').not().isEmpty(),
    body('estado_cuenta','El estado cuenta es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    body('tipo_cuenta','El tipo cuenta es obligatorio').not().isEmpty(),
    validarCampos

],createCuenta)

router.put('/:id', [
    validarJWT,
    body('nombre','El nombre es obligatorio').not().isEmpty(),
    body('banco','El banco es obligatorio').not().isEmpty(),
    body('numero_cuenta','El numero cuenta es obligatorio').not().isEmpty(),
    body('fecha_apertura','El fecha apertura es obligatorio').not().isEmpty(),
    body('moneda','El moneda es obligatorio').not().isEmpty(),
    body('saldo_inicial','El saldo inicial es obligatorio').not().isEmpty(),
    body('estado_cuenta','El estado cuenta es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    body('tipo_cuenta','El tipo cuenta es obligatorio').not().isEmpty(),
    validarCampos
], updateCuenta);

router.delete('/:id', validarJWT, deleteCuenta);



module.exports = router;