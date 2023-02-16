const { response } = require('express');

// Llamar al modelo
const Propietario = require('../../models/administracion/propietario');

const getPropietario = async(req, res) => {

const  propietarios =  await Propietario.find();

    res.json({
        ok: true,
        propietarios: propietarios
    });
    
}

const createPropietario = async (req, res = response) =>{
    const uid = req.uid;
    const propietario = new Propietario({
        id_usuario: uid,
        ...req.body
    });

    try {

        const propietarioDB = await propietario.save();

        res.json({
        ok: true,
        propietario: propietarioDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};
const updatePropietario = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const propietario = await Propietario.findById( id );

        if ( !propietario ) {
            return res.status(404).json({
                ok: true,
                msg: 'Propietario no encontrado por id',
            });
        }

        const cambiosPropietarios = {
            ...req.body,
            id_usuario: uid
        }

        const propietarioActualizado = await Propietario.findByIdAndUpdate( id, cambiosPropietarios, { new: true } );


        res.json({
            ok: true,
            propietario: propietarioActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};


const deletePropietario = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const propietario = await Propietario.findById( id );

        if ( !propietario ) {
            return res.status(404).json({
                ok: true,
                msg: 'Propietario no encontrado por id',
            });
        }

        const cambiosPropietarios = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const propietarioActualizado = await Propietario.findByIdAndUpdate( id, cambiosPropietarios,{ new: true } );


        res.json({
            ok: true,
            propietario: propietarioActualizado
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
    getPropietario,
    createPropietario,
    updatePropietario,
    deletePropietario
}