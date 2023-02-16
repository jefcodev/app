const { Schema, model } = require('mongoose');


const PropietarioSchema = Schema({
    identificacion: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
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
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
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
    profesion: {
        type: String
    },
    actividad_economica: {
        type: String
    },
    foto: {
        type: String
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
    
},{collection:'adm_propietarios'});

PropietarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'PropietarioSchema', PropietarioSchema );
