const { response } = require('express');

// Llamar a la Emergencia
const Emergencia = require('../../models/emergencia/emergencia');
const moment = require('moment-timezone');
const { format, utcToZonedTime } = require('date-fns-tz');
const { DateTime } = require('luxon');
const { Console } = require('console');




const getEmergencia = async(req, res) => {

const  emergencia =  await Emergencia.find();

    res.json({
        ok: true,
        emergencia: emergencia
    });
    
}

const createEmergencia = async (req, res = response) =>{

    
    const localTime = moment().tz("America/Guayaquil").toDate()
    const uid = req.uid;
    const emergencia = new Emergencia({
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
const updateEmergencia = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const emergencia = await Emergencia.findById( id );

        if ( !emergencia ) {
            return res.status(404).json({
                ok: true,
                msg: 'Emergencia no encontrada por id',
            });
        }

        const cambiosEmergencias = {
            ...req.body,
            id_usuario: uid
        }

        const emergenciaActualizado = await Emergencia.findByIdAndUpdate( id, cambiosEmergencias, { new: true } );


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


const deleteEmergencia = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const emergencia = await Emergencia.findById( id );

        if ( !emergencia ) {
            return res.status(404).json({
                ok: true,
                msg: 'Emergencia no encontrada por id',
            });
        }

        const cambiosEmergencias = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const emergenciaActualizado = await Emergencia.findByIdAndUpdate( id, cambiosEmergencias,{ new: true } );


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
    getEmergencia,
    createEmergencia,
    updateEmergencia,
    deleteEmergencia
}