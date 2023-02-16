const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    estado: {
        type: Boolean,
        required: true,
        default : true
    },
    role: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Rol'
    }
},{collection: 'seg_usuarios'});

UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'Usuario', UsuarioSchema );