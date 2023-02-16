/*
    Ruta: /api/v1/adm_tipo_inmueble
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getTipoInmueble, createTipoInmueble, updateTipoInmueble, deleteTipoInmueble} = require('../../controllers/administracion/tipos_inmuebles')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();


router.get( '/',validarJWT,getTipoInmueble);
//router.post('/',validarJWT,createTipoInmueble)
router.post('/',[
    validarJWT,
    body('descripcion','La descripcion es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    validarCampos

],createTipoInmueble);

router.put('/:id', [
    validarJWT,
    body('descripcion','La descripcion es obligatorio').not().isEmpty(),
    body('estado','El estado es obligatorio').not().isEmpty(),
    validarCampos
], updateTipoInmueble);

router.delete('/:id', validarJWT, deleteTipoInmueble);


module.exports = router;