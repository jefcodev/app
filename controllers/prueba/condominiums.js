const { response } = require('express');

// Llamar a la Condominium
const Condominium = require('../../models/prueba/condominium');
const moment = require('moment-timezone');
const { format, utcToZonedTime } = require('date-fns-tz');
const { DateTime } = require('luxon');
const { Console } = require('console');



const getCondominium = async(req, res) => {

    const  condominium =  await Condominium.find();
    console.log("condo........",condominium)
    res.json(condominium);
    
}

const getCondominiumId = async(req, res) => {
      
    const id = req.params.id

    const  condominium =  await Condominium.findById(id);
    if (!condominium) {
        res.status(404).json('Registro no encontrado');
    } else {
        res.json(condominium);
    }
        
}

const createCondominium = async (req, res = response) =>{
    const condominium = new Condominium({
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