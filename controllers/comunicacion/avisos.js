const { response } = require('express');

// call model
const Aviso = require('../../models/comunicacion/aviso');
const getAviso = async(req, res) => {

const  aviso =  await Aviso.find();
    res.json({
        ok: true,
        aviso: aviso
    });
}

const createAviso = async (req, res = response) =>{
    const uid = req.uid;
    const aviso = new Aviso({
        id_usuario: uid,
        ...req.body
    });
    try {
        const avisoDB = await aviso.save();
        res.json({
        ok: true,
        aviso: avisoDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }
};

const updateAviso = async (req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const aviso = await Aviso.findById( id );
        if ( !aviso ) {
            return res.status(404).json({
                ok: true,
                msg: 'Aviso no encontrado por id',
            });
        }
        const cambiosAvisos = {
            ...req.body,
            id_usuario: uid
        }
        const avisoActualizado = await Aviso.findByIdAndUpdate( id, cambiosAvisos, { new: true } );
        res.json({
            ok: true,
            aviso: avisoActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

};


const deleteAviso = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const aviso = await Aviso.findById( id );

        if ( !aviso ) {
            return res.status(404).json({
                ok: true,
                msg: 'Aviso no encontrado por id',
            });
        }

        const cambiosAvisos = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const avisoActualizado = await Aviso.findByIdAndUpdate( id, cambiosAvisos,{ new: true } );

        res.json({
            ok: true,
            aviso: avisoActualizado
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
    getAviso,
    createAviso,
    updateAviso,
    deleteAviso
}