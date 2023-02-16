/*
    Ruta: /api/v1/reclamos
*/
const { Router } = require('express');
const { body } = require('express-validator');
const { getReclamo, createReclamo, updateReclamo, deleteReclamo} = require('../../controllers/prueba/claims')
const router = Router();

router.get( '/',getReclamo );

router.post('/',createReclamo);

router.put('/:id',updateReclamo);

router.delete('/:id', deleteReclamo);

module.exports = router;