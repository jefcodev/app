const { response } = require('express');

// Llamar al modelo
const ServicioBasico = require('../../models/administracion/servicioBasico');

const getservicioBasico = async(req, res) => {

    const servicioBasico = await ServicioBasico.find();

    res.json({
        ok: true,
        servicioBasico
    });

}

const createServicioBasico = async(req, res = response) => {
    const uid = req.uid;
    const servicioBasico = new ServicioBasico({
        usuario: uid,
        ...req.body
    });

    try {

        const servicioBasicoDB = await servicioBasico.save();

        res.json({
            ok: true,
            servicioBasico: servicioBasicoDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

};

const updateServicioBasico = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const servicioBasico = await ServicioBasico.findById(id);
        if (!servicioBasico) {
            return res.status(404).json({
                ok: true,
                msg: 'Condoiminio no encontrado por id',
            });
        }

        const cambiosservicioBasicos = {
            ...req.body,
            usuario: uid
        }
        const servicioBasicoActualizado = await ServicioBasico.findByIdAndUpdate(id, cambiosservicioBasicos, { new: true });
        res.json({
            ok: true,
            servicioBasico: servicioBasicoActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};

const deleteServicioBasico = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const servicioBasico = await ServicioBasico.findById(id);
        if (!servicioBasico) {
            return res.status(404).json({
                ok: true,
                msg: 'servicioBasico no encontrado por id',
            });
        }
        const cambiosservicioBasicos = {
            ...req.body,
            usuario: uid,
            estado: false
        }

        const servicioBasicoActualizado = await ServicioBasico.findByIdAndUpdate(id, cambiosservicioBasicos, { new: true });
        res.json({
            ok: true,
            servicioBasico: servicioBasicoActualizado
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
    getservicioBasico,
    createServicioBasico,
    deleteServicioBasico,
    updateServicioBasico,
}