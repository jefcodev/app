const { response } = require('express');

// Llamar al modelo
const Cuenta = require('../../models/finanzas/cuenta');

const getCuenta = async(req, res) => {

const  cuenta =  await Cuenta.find();

    res.json({
        ok: true,
        cuenta: cuenta
    });
    
}

const createCuenta = async (req, res = response) =>{
    const uid = req.uid;
    const cuenta = new Cuenta({
        usuario: uid,
        ...req.body
    });

    try {

        const cuentaDB = await cuenta.save();

        res.json({
        ok: true,
        cuenta: cuentaDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};


const updateCuenta = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const cuenta = await Cuenta.findById( id );

        if ( !cuenta ) {
            return res.status(404).json({
                ok: true,
                msg: ' Cuenta no encontrado por id',
            });
        }

        const cambiosCuenta = {
            ...req.body,
            usuario: uid
        }

        const hCuentaActualizado = await Cuenta.findByIdAndUpdate( id, cambiosCuenta, { new: true } );


        res.json({
            ok: true,
            cuenta: hCuentaActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};

const deleteCuenta = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const cuenta = await Cuenta.findById( id );

        if ( !cuenta ) {
            return res.status(404).json({
                ok: true,
                msg: 'Rclamo no encontrado por id',
            });
        }

        const cambiosCuenta = {
            ...req.body,
            usuario: uid,
            estado:false
        }

        const hCuentaActualizado = await Cuenta.findByIdAndUpdate( id, cambiosCuenta,{ new: true } );


        res.json({
            ok: true,
            cuenta: hCuentaActualizado
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
    getCuenta,
    createCuenta,
    updateCuenta,
    deleteCuenta
}