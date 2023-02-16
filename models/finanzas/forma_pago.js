const { Schema, model } = require('mongoose');


const FormaPagoSchema = Schema({
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default : true
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'UsuarioSchema'
    },
    
},{collection: 'fin_formas_pagos'});

FormaPagoSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'FormaPagoSchema', FormaPagoSchema );
