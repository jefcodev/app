const { response } = require('express');

// Llamar al modelo
const Reserva = require('../../models/administracion/reserva');

const getReserva = async(req, res) => {

    const reserva = await Reserva.find();

    res.json({
        ok: true,
        reserva
    });

}

const createReserva = async(req, res = response) => {
    const uid = req.uid;
    const reserva = new Reserva({
        usuario: uid,
        ...req.body
    });

    try {

        const reservaDB = await reserva.save();

        res.json({
            ok: true,
            reserva: reservaDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};

const updateReserva = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const reserva = await Reserva.findById(id);
        if (!reserva) {
            return res.status(404).json({
                ok: true,
                msg: 'Condoiminio no encontrado por id',
            });
        }

        const cambiosreservas = {
            ...req.body,
            usuario: uid
        }
        const reservaActualizado = await Reserva.findByIdAndUpdate(id, cambiosreservas, { new: true });
        res.json({
            ok: true,
            reserva: reservaActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};


const deleteReserva = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const reserva = await Reserva.findById(id);
        if (!reserva) {
            return res.status(404).json({
                ok: true,
                msg: 'reserva no encontrado por id',
            });
        }
        const cambiosreservas = {
            ...req.body,
            usuario: uid,
            estado: false
        }

        const reservaActualizado = await Reserva.findByIdAndUpdate(id, cambiosreservas, { new: true });
        res.json({
            ok: true,
            reserva: reservaActualizado
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
    getReserva,
    createReserva,
    deleteReserva,
    updateReserva,
}