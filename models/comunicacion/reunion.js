const { Schema, model } = require('mongoose');


const ReunionSchema = Schema({
    asunto: {
        type: String,
        required: true
    },
    tema_tratar: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
    estado_reunion: {
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
        ref: 'ReunionSchema'
    },
    
},{collection: 'com_reuniones'});

ReunionSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'ReunionSchema', ReunionSchema );
