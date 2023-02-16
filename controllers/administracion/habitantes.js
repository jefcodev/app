const { response } = require('express');

// Llamar al modelo
const Habitante = require('../../models/administracion/habitante');

const getHabitante = async(req, res) => {

    const habitante = await Habitante.find();

    res.json({
        ok: true,
        habitante
    });

}


const createHabitante = async(req, res = response) => {
    const uid = req.uid;
    const habitante = new Habitante({
        usuario: uid,
        ...req.body
    });

    try {

        const habitanteDB = await habitante.save();

        res.json({
            ok: true,
            habitante: habitanteDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};

const updateHabitante = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const habitante = await Habitante.findById(id);
        if (!habitante) {
            return res.status(404).json({
                ok: true,
                msg: 'Condoiminio no encontrado por id',
            });
        }

        const cambioshabitantes = {
            ...req.body,
            usuario: uid
        }
        const habitanteActualizado = await Habitante.findByIdAndUpdate(id, cambioshabitantes, { new: true });
        res.json({
            ok: true,
            habitante: habitanteActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};


const deleteHabitante = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const habitante = await Habitante.findById(id);
        if (!habitante) {
            return res.status(404).json({
                ok: true,
                msg: 'habitante no encontrado por id',
            });
        }
        const cambioshabitantes = {
            ...req.body,
            usuario: uid,
            estado: false
        }

        const habitanteActualizado = await Habitante.findByIdAndUpdate(id, cambioshabitantes, { new: true });
        res.json({
            ok: true,
            habitante: habitanteActualizado
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
    getHabitante,
    createHabitante,
    deleteHabitante,
    updateHabitante,
}