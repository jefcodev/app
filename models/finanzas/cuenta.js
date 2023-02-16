const { Schema, model } = require('mongoose');


const CuentaSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    banco: {
        type: String,
        required: true
    },
    numero_cuenta: {
        type: String,
        required: true
    },
    fecha_apertura: {
        type: String,
        required: true
    },
    moneda: {
        type: String,
        required: true
    },
    saldo_inicial: {
        type: Number,
        required: true
    },
    estado_cuenta: {
        type: Boolean,
        required: true,
        default : true
    },  
    estado: {
        type: Boolean,
        required: true,
        default : true
    },
    tipo_cuenta: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'TipoCuenta'
    },
    usuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    
},{collection: 'fin_cuentas'});

CuentaSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'Cuenta', CuentaSchema );
