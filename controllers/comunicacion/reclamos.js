const { response } = require('express');

// Llamar al modelo
const Reclamo = require('../../models/comunicacion/reclamo');

const getReclamo = async(req, res) => {

const  reclamo =  await Reclamo.find();

    res.json({
        ok: true,
        reclamo
    });
    
}

const createReclamo = async (req, res = response) =>{
    const uid = req.uid;
    const reclamo = new Reclamo({
        id_usuario: uid,
        ...req.body
    });

    try {

        const reclamoDB = await reclamo.save();

        res.json({
        ok: true,
        reclamo: reclamoDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};

const updateReclamo = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const reclamo = await Reclamo.findById( id );

        if ( !reclamo ) {
            return res.status(404).json({
                ok: true,
                msg: 'Rclamo no encontrado por id',
            });
        }

        const cambiosReclamos = {
            ...req.body,
            id_usuario: uid
        }

        const reclamoActualizado = await Reclamo.findByIdAndUpdate( id, cambiosReclamos, { new: true } );


        res.json({
            ok: true,
            reclamo: reclamoActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};


const deleteReclamo = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const reclamo = await Reclamo.findById( id );

        if ( !reclamo ) {
            return res.status(404).json({
                ok: true,
                msg: 'Rclamo no encontrado por id',
            });
        }

        const cambiosReclamos = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const reclamoActualizado = await Reclamo.findByIdAndUpdate( id, cambiosReclamos,{ new: true } );


        res.json({
            ok: true,
            reclamo: reclamoActualizado
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
    getReclamo,
    createReclamo,
    updateReclamo,
    deleteReclamo
}