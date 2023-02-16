/*
    Ruta: /api/v1/emergencias
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getEmergency, createEmergency,updateEmergency, deleteEmergency} = require('../../controllers/prueba/emergencys')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();

router.get( '/',getEmergency);

router.post('/',createEmergency);

router.put('/:id',updateEmergency);

router.delete('/:id', deleteEmergency);

module.exports = router;