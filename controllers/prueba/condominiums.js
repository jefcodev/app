const { response } = require('express');

// Llamar a la Condominium
const Condominium = require('../../models/prueba/condominium');
const moment = require('moment-timezone');
const { format, utcToZonedTime } = require('date-fns-tz');
const { DateTime } = require('luxon');
const { Console } = require('console');


const getCondominiumId = async(req, res) => {

    const id  = req.params.id;

    const  condomini =  await Condominium.findById(id);

    
        console.log("condo........",condomini)
        console.log("id........",id)

    
        res.json(condomini);
        
}



const getCondominium = async(req, res) => {
    

const  condomini =  await Condominium.find(id);

    console.log("condo........",condomini)

    res.json(condomini);
    
}

const createCondominium = async (req, res = response) =>{

    
    const localTime = moment().tz("America/Guayaquil").toDate()
    const uid = req.uid;
    const condominium = new Condominium({
        id_usuario: uid,
        fecha_hora: localTime,
        ...req.body
    });

    try {

        const condominiumDB = await condominium.save();

        res.json({
        ok: true,
        condominium: condominiumDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};
const updateCondominium = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const condominium = await Condominium.findById( id );

        if ( !condominium ) {
            return res.status(404).json({
                ok: true,
                msg: 'Condominium no encontrada por id',
            });
        }

        const cambiosCondominiums = {
            ...req.body,
            id_usuario: uid
        }

        const condominiumActualizado = await Condominium.findByIdAndUpdate( id, cambiosCondominiums, { new: true } );


        res.json({
            ok: true,
            condominium: condominiumActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};


const deleteCondominium = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const condominium = await Condominium.findById( id );

        if ( !condominium ) {
            return res.status(404).json({
                ok: true,
                msg: 'Condominium no encontrada por id',
            });
        }

        const cambiosCondominiums = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const condominiumActualizado = await Condominium.findByIdAndUpdate( id, cambiosCondominiums,{ new: true } );


        res.json({
            ok: true,
            condominium: condominiumActualizado
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
    getCondominium,
    getCondominiumId,
    createCondominium,
    updateCondominium,
    deleteCondominium
}