const { response } = require('express');
const Rol = require('../models/rol');

const getRoles = async(req, res) => {

const  roles =  await Rol.find({}, 'descripcion estado');

    res.json({
        ok: true,
        roles
    });
    
}

const createRol = async (req, res = response) =>{
    const rol = new Rol({ estado: true,...req.body});

    try {

        const rolDB = await rol.save();

        res.json({
        ok: true,
        rol: rolDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};


const updateRol = async (req, res = response) => {

    const id  = req.params.id;

    try {
        
        const rol = await Rol.findById( id );

        if ( !rol ) {
            return res.status(404).json({
                ok: true,
                msg: 'Rol no encontrado por id',
            });
        }

        const cambiosRol = {
            ...req.body,
            estado: true
        }

        const rolActualizado = await Rol.findByIdAndUpdate( id, cambiosRol, { new: true } );

        res.json({
            ok: true,
            rol: rolActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

};


const deleteRol = async (req, res = response) => {

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
            usuario: uid,
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
    getRoles,
    createRol,
    updateRol,
    deleteRol
}