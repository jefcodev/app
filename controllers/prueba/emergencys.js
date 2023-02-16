const { response } = require('express');

// Llamar a la Emergency
const Emergency = require('../../models/prueba/emergency');
const moment = require('moment-timezone');
const { format, utcToZonedTime } = require('date-fns-tz');
const { DateTime } = require('luxon');
const { Console } = require('console');




const getEmergency = async(req, res) => {

const  emergencia =  await Emergency.find();

    res.json({
        ok: true,
        emergencia: emergencia
    });
    
}

const createEmergency = async (req, res = response) =>{

    
    const localTime = moment().tz("America/Guayaquil").toDate()
    const uid = req.uid;
    const emergencia = new Emergency({
        id_usuario: uid,
        fecha_hora: localTime,
        ...req.body
    });

    try {

        const emergenciaDB = await emergencia.save();

        res.json({
        ok: true,
        emergencia: emergenciaDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};
const updateEmergency = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const emergencia = await Emergency.findById( id );

        if ( !emergencia ) {
            return res.status(404).json({
                ok: true,
                msg: 'Emergency no encontrada por id',
            });
        }

        const cambiosEmergencys = {
            ...req.body,
            id_usuario: uid
        }

        const emergenciaActualizado = await Emergency.findByIdAndUpdate( id, cambiosEmergencys, { new: true } );


        res.json({
            ok: true,
            emergencia: emergenciaActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};


const deleteEmergency = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const emergencia = await Emergency.findById( id );

        if ( !emergencia ) {
            return res.status(404).json({
                ok: true,
                msg: 'Emergency no encontrada por id',
            });
        }

        const cambiosEmergencys = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const emergenciaActualizado = await Emergency.findByIdAndUpdate( id, cambiosEmergencys,{ new: true } );


        res.json({
            ok: true,
            emergencia: emergenciaActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};


module.exports = {
    getEmergency,
    createEmergency,
    updateEmergency,
    deleteEmergency
}