const { Schema, model } = require('mongoose');


const RolSchema = Schema({

    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    
},{collection: 'seg_roles'});

RolSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Rol', RolSchema );
