/*
    Ruta: /api/v1/condominios
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getCondominio, createCondominio, updateCondominio, deleteCondominio} = require('../../controllers/administracion/condominios')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();


router.get( '/',validarJWT,getCondominio);
router.post('/',[
    validarJWT,
    body('codigo','El codigo es obligatorio').not().isEmpty(),
    body('nombre','El nombre es obligatorio').not().isEmpty(),
    body('direccion','La direccion es obligatorio').not().isEmpty(),
    body('telefono','El telefono es obligatorio').not().isEmpty(),
    body('referencia','El referencia es obligatorio').not().isEmpty(),
    body('ciudad','El ciudad es obligatorio').not().isEmpty(),
    body('region','El region es obligatorio').not().isEmpty(),
    body('pais','El pais es obligatorio').not().isEmpty(),
    body('numero_inmuebles','El numero inmuebles es obligatorio').not().isEmpty(),
    body('reglamento','El reglamento es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    validarCampos

],createCondominio);

router.put('/:id', [
    validarJWT,
    body('codigo','El codigo es obligatorio').not().isEmpty(),
    body('nombre','El nombre es obligatorio').not().isEmpty(),
    body('direccion','La direccion es obligatorio').not().isEmpty(),
    body('telefono','El telefono es obligatorio').not().isEmpty(),
    body('referencia','El referencia es obligatorio').not().isEmpty(),
    body('ciudad','El ciudad es obligatorio').not().isEmpty(),
    body('region','El region es obligatorio').not().isEmpty(),
    body('pais','El pais es obligatorio').not().isEmpty(),
    body('numero_inmuebles','El numero inmuebles es obligatorio').not().isEmpty(),
    body('reglamento','El reglamento es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    validarCampos
], updateCondominio);

router.delete('/:id', validarJWT, deleteCondominio);

module.exports = router;