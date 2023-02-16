const { Schema, model } = require('mongoose');

const CondominioSchema = Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    referencia: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    numero_inmuebles: {
        type: Number,
        required: true,
    },
    foto: {
        type: String,
    },
    reglamento: {
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
    }
},{collection: 'adm_condominios'});

CondominioSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'CondominioSchema', CondominioSchema );
