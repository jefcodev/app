const { Schema, model } = require('mongoose');

const CondominoSchema = Schema({
    identificacion: {
        type: String,
        required: true,
        unique: true
    },
    apellidos: {
        type: String,
        required: true
    },
    nombres: {
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
    celular: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    genero: {
        type: String,
        unique: true
    },
    estado_civil: {
        type: String
    },
    nacionalidad: {
        type: String
    },
    profesion: {
        type: String,
    },
    actividad_economica: {
        type: String,
    },
    contrato: {
        type: String,
        required: true
    },
    foto: {
        type: String,        
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

},{collection: 'adm_condominos'});

CondominoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CondominoSchema', CondominoSchema );
