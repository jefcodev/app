const { response } = require('express');

// Llamar al evento
const Evento = require('../../models/comunicacion/evento');

const getEvento = async(req, res) => {

const  evento =  await Evento.find();

    res.json({
        ok: true,
        evento: evento
    });
    
}
const createEvento = async (req, res = response) =>{
    const uid = req.uid;
    const evento = new Evento({
        id_usuario: uid,
        ...req.body
    });

    try {

        const eventoDB = await evento.save();

        res.json({
        ok: true,
        evento: eventoDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};
const updateEvento = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const evento = await Evento.findById( id );

        if ( !evento ) {
            return res.status(404).json({
                ok: true,
                msg: 'Evento no encontrado por id',
            });
        }

        const cambiosEventos = {
            ...req.body,
            id_usuario: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate( id, cambiosEventos, { new: true } );


        res.json({
            ok: true,
            evento: eventoActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};


const deleteEvento = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const evento = await Evento.findById( id );

        if ( !evento ) {
            return res.status(404).json({
                ok: true,
                msg: 'Evento no encontrado por id',
            });
        }

        const cambiosEventos = {
            ...req.body,
            id_usuario: uid,
            estado:false
        }

        const eventoActualizado = await Evento.findByIdAndUpdate( id, cambiosEventos,{ new: true } );


        res.json({
            ok: true,
            evento: eventoActualizado
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
    getEvento,
    createEvento,
    updateEvento,
    deleteEvento
}