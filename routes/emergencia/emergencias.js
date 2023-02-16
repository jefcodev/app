/*
    Ruta: /api/v1/emergencias
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getEmergencia, createEmergencia,updateEmergencia, deleteEmergencia} = require('../../controllers/emergencia/emergencias')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();


router.get( '/',validarJWT,getEmergencia);

router.post('/',[
    validarJWT 
],createEmergencia);

router.put('/:id',[
    validarJWT
],updateEmergencia);

router.delete('/:id', validarJWT, deleteEmergencia);
module.exports = router;