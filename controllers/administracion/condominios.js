const { response } = require('express');

// Llamar al modelo
const Condominio = require('../../models/administracion/condominio');

const getCondominio = async(req, res) => {

const  condominio =  await Condominio.find();

    res.json({
        ok: true,
        condominio
    });
    
}

const createCondominio = async (req, res = response) =>{
    const uid = req.uid;
    const condominio = new Condominio({
        id_usuario: uid,
        ...req.body
    });

    try {

        const condominioDB = await condominio.save();

        res.json({
        ok: true,
        condominio: condominioDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }
};

    
    
const updateCondominio = async (req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const condominio = await Condominio.findById( id );
        if ( !condominio) {
            return res.status(404).json({
                ok: true,
                msg: 'Condoiminio no encontrado por id',
            });
        }

        const cambiosCondominios = {
            ...req.body,
            id_usuario: uid
        }
        const condominioActualizado = await Condominio.findByIdAndUpdate( id, cambiosCondominios, { new: true } );
        res.json({
            ok: true,
            condominio: condominioActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};


const deleteCondominio = async (req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const condominio = await Condominio.findById( id );
        if ( !condominio ) {
            return res.status(404).json({
                ok: true,
                msg: 'Condominio no encontrado por id',
            });
        }
        const cambiosCondominios = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const condominioActualizado = await Condominio.findByIdAndUpdate( id, cambiosCondominios,{ new: true } );
        res.json({
            ok: true,
            condominio: condominioActualizado
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
    getCondominio,
    createCondominio,
    updateCondominio,
    deleteCondominio
}