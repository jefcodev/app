/*
    Ruta: /api/v1/condominiums
*/
const { Router } = require('express');
const { body } = require('express-validator');

const { getCondominium, createCondominium,updateCondominium, deleteCondominium,getCondominiumId} = require('../../controllers/prueba/condominiums')
const { validarCampos } = require('../../middlewares/validar-campos');
const { validarJWT } = require('../../middlewares/validar-jwt');



const router = Router();

router.get( '/:id',getCondominiumId);

router.post('/',createCondominium);

router.put('/:id',updateCondominium);

router.delete('/:id', deleteCondominium);

module.exports = router;