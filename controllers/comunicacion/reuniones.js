const { response } = require('express');

// Llamar al modelo
const Reunion = require('../../models/comunicacion/reunion');

const getReunion = async(req, res) => {

const  reunion =  await Reunion.find();

    res.json({
        ok: true,
        reunion: reunion
    });
    
}

const createReunion = async (req, res = response) =>{
    const uid = req.uid;
    const reunion = new Reunion({
        id_usuario: uid,
        ...req.body
    });

    try {

        const reunionDB = await reunion.save();

        res.json({
        ok: true,
        reunion: reunionDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};


const updateReunion = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const reunion = await Reunion.findById( id );

        if ( !reunion ) {
            return res.status(404).json({
                ok: true,
                msg: 'Reunion no encontrado por id',
            });
        }

        const cambiosReuniones = {
            ...req.body,
            id_usuario: uid
        }

        const hreunionActualizado = await Reunion.findByIdAndUpdate( id, cambiosReuniones, { new: true } );


        res.json({
            ok: true,
            reunion: hreunionActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};

const deleteReunion = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const reunion = await Reunion.findById( id );

        if ( !reunion ) {
            return res.status(404).json({
                ok: true,
                msg: 'Rclamo no encontrado por id',
            });
        }

        const cambiosReuniones = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const hreunionActualizado = await Reunion.findByIdAndUpdate( id, cambiosReuniones,{ new: true } );


        res.json({
            ok: true,
            reunion: hreunionActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}

module.exports = {
    getReunion,
    createReunion,
    updateReunion,
    deleteReunion
}