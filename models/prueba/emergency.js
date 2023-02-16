const { timeStamp } = require('console');
const { Schema, model } = require('mongoose');


const EmergencySchema = Schema({
    _id: {
        type: Number,
    }, 
    
    mensaje: {
        type: String,
    },
 
    fecha_hora: {
        type: String,
    },
    lugar: {
        type: String
    },
    estado_emergencia: {
        type: String,
    }
    
},{collection:'prueba_emergency'});

EmergencySchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'EmergencySchema', EmergencySchema );
