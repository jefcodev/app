const { Schema, model } = require('mongoose');

const moment = require('moment-timezone');
// Obtener la fecha y hora actual en formato ISO 8601
const date1 = moment().tz('America/Guayaquil').format();

const AvisoSchema = Schema({
    asunto: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha_hora: {
        type: String,
        required: true,
        default: date1
    },
    estado_aviso: {
        type: String,
        required: true,
        default: "Enviado"
    },
    estado: {
        type: Boolean,
        required: true,
        default : true
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'AvisoSchema'
    },
    
},{collection: 'com_avisos'});

AvisoSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'AvisoSchema', AvisoSchema );
