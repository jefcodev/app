const { timeStamp } = require('console');
const { Schema, model } = require('mongoose');


const EmergenciaSchema = Schema({
    mensaje: {
        type: String,
        default: 'sin especificar'
    },
 
    fecha_hora: {
        type: String,
        required: true
    },
    lugar: {
        type: String
    },
    estado_emergencia: {
        type: String,
        default : 'activa'
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
    
},{collection:'eme_emergencias'});

EmergenciaSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'EmergenciaSchema', EmergenciaSchema );
