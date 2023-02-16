require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { dbConnection } = require('./database/config');

// crear servidor express
const app = express();

// configuración cors
app.use(cors());

//Lectura y parse del body
app.use(express.json());

//conection DB
dbConnection();

// routes
app.use('/api/v1/usuarios/', require('./routes/usuarios/usuarios'));
app.use('/api/v1/roles/', require('./routes/roles'));

// Finanzas 
app.use('/api/v1/facturas', require('./routes/finanzas/facturas'))
app.use('/api/v1/tipos_cuentas', require('./routes/finanzas/tipos_cuentas'))
app.use('/api/v1/cuentas', require('./routes/finanzas/cuentas'))
app.use('/api/v1/formas_pagos', require('./routes/finanzas/formas_pagos'))

// Comunicación
app.use('/api/v1/reclamos', require('./routes/comunicacion/reclamos'));
app.use('/api/v1/eventos', require('./routes/comunicacion/eventos'));
app.use('/api/v1/reuniones', require('./routes/comunicacion/reuniones'));
app.use('/api/v1/avisos', require('./routes/comunicacion/avisos'));

// Administracion
app.use('/api/v1/condominios', require('./routes/administracion/condominios'));
app.use('/api/v1/condominos', require('./routes/administracion/condominos'));
app.use('/api/v1/areasComunales', require('./routes/administracion/areasComunales'));
app.use('/api/v1/propietarios', require('./routes/administracion/propietarios'));
app.use('/api/v1/tipos_inmuebles', require('./routes/administracion/tipos_inmuebles'));

//Emergencia
app.use('/api/v1/emergencias', require('./routes/emergencia/emergencias'));
app.use('/api/v1/emergencys', require('./routes/prueba/emergencys'));
app.use('/api/v1/login/', require('./routes/auth'));

// Busquedas
app.use('/api/v1/todo/', require('./routes/busquedas'));
app.use('/api/v1/upload', require('./routes/uploads'));

//Prueba

app.listen(process.env.PORT, () => {
    console.log('Servidor ' + process.env.PORT)
})