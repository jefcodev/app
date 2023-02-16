/*
    Ruta: /api/v1/roles
*/
const { Router } = require('express');

const { validarJWT } = require("../../middlewares/validar-jwt");
const { getFacturas, createFactura} = require('../../controllers/finanzas/factura');



const router = Router();


router.get( '/' ,getFacturas );
router.post('/', validarJWT,createFactura);



module.exports = router;