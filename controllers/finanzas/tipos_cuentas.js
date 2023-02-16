const { response } = require('express');

// Llamar al modelo
const TipoCuenta = require('../../models/finanzas/tipo_cuenta');

const getTipoCuenta = async(req, res) => {

const  tipo_cuenta =  await TipoCuenta.find();

    res.json({
        ok: true,
        tipo_cuenta: tipo_cuenta
    });
    
}

const createTipoCuenta = async (req, res = response) =>{
    const uid = req.uid;
    const tipo_cuenta = new TipoCuenta({
        usuario: uid,
        ...req.body
    });

    try {

        const tipo_cuentaDB = await tipo_cuenta.save();

        res.json({
        ok: true,
        tipo_cuenta: tipo_cuentaDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};


const updateTipoCuenta = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const tipo_cuenta = await TipoCuenta.findById( id );

        if ( !tipo_cuenta ) {
            return res.status(404).json({
                ok: true,
                msg: 'Tipo Cuenta no encontrado por id',
            });
        }

        const cambiosTipoCuenta = {
            ...req.body,
            usuario: uid
        }

        const htipoCuentaActualizado = await TipoCuenta.findByIdAndUpdate( id, cambiosTipoCuenta, { new: true } );


        res.json({
            ok: true,
            tipo_cuenta: htipoCuentaActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};

const deleteTipoCuenta = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const tipo_cuenta = await TipoCuenta.findById( id );

        if ( !tipo_cuenta ) {
            return res.status(404).json({
                ok: true,
                msg: 'Rclamo no encontrado por id',
            });
        }

        const cambiosTipoCuenta = {
            ...req.body,
            usuario: uid,
            estado:false
        }

        const htipoCuentaActualizado = await TipoCuenta.findByIdAndUpdate( id, cambiosTipoCuenta,{ new: true } );


        res.json({
            ok: true,
            tipo_cuenta: htipoCuentaActualizado
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
    getTipoCuenta,
    createTipoCuenta,
    updateTipoCuenta,
    deleteTipoCuenta
}