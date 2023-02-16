const { response } = require("express")
const {db_postgres } = require("../../cnn")

const Usuario = require('../../models/usuarios/usuario')

// Facturas

const getFacturas = async (req, res) => {
    const response = await db_postgres.any('select * from factura')
    res.json(response)
}

const createFactura = async (req, res) => {
    const uid = req.uid;

    const { id_fac} = (req.body);
    const response = await db_postgres.any(`INSERT INTO factura (id_fac, condomino) 
    values($1,$2)`, [id_fac,uid]);
    res.json({
        message: 'tbl_cliente creada correctamente'
    })
}




module.exports = {
    getFacturas,
    createFactura
}