const { Schema, model } = require('mongoose');


const ReclamoSchema = Schema({
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
    estado: {
        type: Boolean,
        required: true,
        default : true
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    }
    
},{collection: 'com_reclamos'});

ReclamoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'ReclamoSchema', ReclamoSchema );
