/*
    Ruta: /api/v1/propietarios
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getPropietario, createPropietario, updatePropietario,deletePropietario} = require('../../controllers/administracion/propietarios')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();


router.get( '/',validarJWT,getPropietario);

router.post('/',[
    validarJWT,
    body('identificacion','La identificación es obligatoria').not().isEmpty(),
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('apellido', 'El apellido es obligatorio').not().isEmpty(),
    body('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    body('direccion', 'La direccion es obligatoria').not().isEmpty(),
    body('celular', 'El celular es obligatorio').not().isEmpty(),
    body('email', 'El email es obligatorio').not().isEmpty(),
    body('fecha_nacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    body('genero', 'El género es obligatorio').not().isEmpty(),
    body('estado_civil', 'El estado civil es obligatorio').not().isEmpty(),
    body('nacionalidad', 'La nacionalidad es obligatoria').not().isEmpty() 

],createPropietario);

router.put('/:id',[
    validarJWT,
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('apellido', 'El apellido es obligatorio').not().isEmpty(),
    body('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    body('direccion', 'La direccion es obligatoria').not().isEmpty(),
    body('celular', 'El celular es obligatorio').not().isEmpty(),
    body('email', 'El email es obligatorio').not().isEmpty(),
    body('genero', 'El género es obligatorio').not().isEmpty(),
    body('estado_civil', 'El estado civil es obligatorio').not().isEmpty()
], updatePropietario);

router.delete('/:id', validarJWT, deletePropietario);
module.exports = router;