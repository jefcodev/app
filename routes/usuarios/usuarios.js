/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/validar-campos');

const { getUsuarios, createUsuario } = require('../../controllers/usuarios/usuarios');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();


router.get( '/' , getUsuarios);
router.post( '/',
    /* [   validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos,
    ],  */
    createUsuario
);



module.exports = router;