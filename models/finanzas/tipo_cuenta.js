const { Schema, model } = require('mongoose');


const TipoCuentaSchema = Schema({
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default : true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    
},{collection: 'fin_tipos_cuentas'});

TipoCuentaSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'TipoCuenta', TipoCuentaSchema );
