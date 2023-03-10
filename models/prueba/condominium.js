const { timeStamp } = require('console');
const { Schema, model } = require('mongoose');

//d
const CondominiumSchema = Schema({
    _id: {
        type: Number,
        required: true
    }, 
 
    nombres: {
        type: String,
        required: true
    },

    apellidos: {
        type: String,
        required: true
    },

    celular: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    contrato: {
        type: String,
        required: true
    }
    
},{collection:'prueba_condominium'});

CondominiumSchema.method('toJSON', function() {
    const { __v, id, ...object } = this.toObject();
    object.id = id;
    return object;
})

module.exports = model( 'CondominiumSchema', CondominiumSchema );
