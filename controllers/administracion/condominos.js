const { response } = require('express');

// call model
const Condomino = require('../../models/administracion/condomino');

const getCondomino = async(req, res) => {

const  condomino =  await Condomino.find();
    res.json({
        ok: true,
        condomino
    });
}

const createCondomino = async (req, res = response) =>{
    const uid = req.uid;
    const condomino = new Condomino({
        id_usuario: uid,
        ...req.body
    });
    try {
        const condominoDB = await condomino.save();
        res.json({
        ok: true,
        condomino: condominoDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }
};
    
const updateCondomino = async (req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const condomino = await Condomino.findById( id );
        if ( !condomino) {
            return res.status(404).json({
                ok: true,
                msg: 'Condomino no encontrado por id',
            });
        }
        const cambiosCondominos = {
            ...req.body,
            id_usuario: uid
        }
        const condominoActualizado = await Condomino.findByIdAndUpdate( id, cambiosCondominos, { new: true } );
        res.json({
            ok: true,
            condomino: condominoActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};

const deleteCondomino = async (req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const condomino = await Condomino.findById( id );
        if ( !condomino ) {
            return res.status(404).json({
                ok: true,
                msg: 'Condomino no encontrado por id',
            });
        }
        const cambiosCondominos = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }
        const condominoActualizado = await Condomino.findByIdAndUpdate( id, cambiosCondominos,{ new: true } );
        res.json({
            ok: true,
            condomino: condominoActualizado
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
    getCondomino,
    createCondomino,
    updateCondomino,
    deleteCondomino
}