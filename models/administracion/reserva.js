const { Schema, model } = require('mongoose');

const ReservaSchema = Schema({

    fecha_inicio: {
        type: Date,
        required: true
    },
    fecha_fin: {
        type: Date,
        required: true
    },
    hora_inicio: {
        type: String,
        required: true
    },

    hora_fin: {
        type: String,
        required: true
    },
    detalle_reserva: {
        type: String,
        required: true
    },
    estado_reserva: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
    id_area_comunal: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'AreaComunal'
    },
    condominio: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Condomino'
    },
    usuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    }
});

ReservaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Reserva', ReservaSchema);