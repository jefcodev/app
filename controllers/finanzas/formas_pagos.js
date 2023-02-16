const { response } = require('express');

// Llamar al modelo
const FormaPago = require('../../models/finanzas/forma_pago');

const getFormaPago = async(req, res) => {

const  forma_pago =  await FormaPago.find();

    res.json({
        ok: true,
        forma_pago: forma_pago
    });
    
}

const createFormaPago = async (req, res = response) =>{
    const uid = req.uid;
    const forma_pago = new FormaPago({
        id_usuario: uid,
        ...req.body
    });

    try {

        const forma_pagoDB = await forma_pago.save();

        res.json({
        ok: true,
        forma_pago: forma_pagoDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};


const updateFormaPago = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const forma_pago = await FormaPago.findById( id );

        if ( !forma_pago ) {
            return res.status(404).json({
                ok: true,
                msg: ' Forma de pago no encontrado por id',
            });
        }

        const cambiosFormaPago = {
            ...req.body,
            id_usuario: uid
        }

        const FormaPagoActualizado = await FormaPago.findByIdAndUpdate( id, cambiosFormaPago, { new: true } );


        res.json({
            ok: true,
            forma_pago: FormaPagoActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};

const deleteFormaPago = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const forma_pago = await FormaPago.findById( id );

        if ( !forma_pago ) {
            return res.status(404).json({
                ok: true,
                msg: 'Forma de Pago no encontrado por id',
            });
        }

        const cambiosFormaPago = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const FormaPagoActualizado = await FormaPago.findByIdAndUpdate( id, cambiosFormaPago,{ new: true } );


        res.json({
            ok: true,
            forma_pago: FormaPagoActualizado
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
    getFormaPago,
    createFormaPago,
    updateFormaPago,
    deleteFormaPago
}