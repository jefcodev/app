const { Schema, model } = require('mongoose');

const AreaComunalSchema = Schema({
    id_area_comunal: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    maximo_hora_reserva: {
        type: Number,
        required: true
    },
    estado_area_comunal: {
        type: String,
        required: true
    },
    foto: {
        type: String,
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    }
});

AreaComunalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('AreaComunal', AreaComunalSchema);