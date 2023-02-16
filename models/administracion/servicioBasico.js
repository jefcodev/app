const { Schema, model } = require('mongoose');

const ServicioBasicoSchema = Schema({
    id_servicio_basico: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
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

ServicioBasicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('ServicioBasico', ServicioBasicoSchema);