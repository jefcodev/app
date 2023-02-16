const { Schema, model } = require('mongoose');


const EventoSchema = Schema({
    asunto: {
        type: String,
        required: true
    },
    motivo: {
        type: String,
        required: true
    },
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
    lugar: {
        type: String,
        required: true
    },
    estado_evento: {
        type: String,
        required: true,
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
    
},{collection:'com_eventos'});

EventoSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'EventoSchema', EventoSchema );
