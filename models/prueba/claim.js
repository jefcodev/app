const { Schema, model } = require('mongoose');


const ClaimSchema = Schema({
    _id: {
        type: Number,
        required: true
    },
    asunto: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    estado_reclamo: {
        type: String,
        required: true
    },
    
},{collection: 'prueba_Claim'});

ClaimSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'ClaimSchema', ClaimSchema );
