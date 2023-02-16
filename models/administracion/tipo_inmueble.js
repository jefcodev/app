const { Schema, model } = require('mongoose');


const TipoInmuebleSchema = Schema({
    descripcion: {
        type: String,
        required: true,
        unique: true
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
    
},{collection: 'adm_tipos_inmuebles'});

TipoInmuebleSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'TipoInmueble', TipoInmuebleSchema );
