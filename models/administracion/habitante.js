const { Schema, model } = require('mongoose');

const HabitanteSchema = Schema({
    identificacion: {
        type: String,
        required: true,
        unique: true
    },
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    genero: {
        type: Boolean,
        required: true
    },
    estado_civil: {
        type: String,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    },
    parentesco: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    }
});

HabitanteSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Habitante', HabitanteSchema);