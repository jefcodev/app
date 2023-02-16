const { response } = require('express');

// Llamar al modelo
const AreaComunal = require('../../models/administracion/areaComunal');

const getAreaComunal = async(req, res) => {

    const areaComunal = await AreaComunal.find();

    res.json({
        ok: true,
        areaComunal
    });

}

const createAreaComunal = async(req, res = response) => {
    const uid = req.uid;
    const areaComunal = new AreaComunal({
        usuario: uid,
        ...req.body
    });

    try {

        const areaComunalDB = await areaComunal.save();

        res.json({
            ok: true,
            areaComunal: areaComunalDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};

const updateAreaComunal = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const areaComunal = await AreaComunal.findById(id);
        if (!areaComunal) {
            return res.status(404).json({
                ok: true,
                msg: 'Condoiminio no encontrado por id',
            });
        }

        const cambiosareaComunals = {
            ...req.body,
            usuario: uid
        }
        const areaComunalActualizado = await AreaComunal.findByIdAndUpdate(id, cambiosareaComunals, { new: true });
        res.json({
            ok: true,
            areaComunal: areaComunalActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};


const deleteAreaComunal = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;
    try {
        const areaComunal = await AreaComunal.findById(id);
        if (!areaComunal) {
            return res.status(404).json({
                ok: true,
                msg: 'areaComunal no encontrado por id',
            });
        }
        const cambiosareaComunals = {
            ...req.body,
            usuario: uid,
            estado: false
        }

        const areaComunalActualizado = await AreaComunal.findByIdAndUpdate(id, cambiosareaComunals, { new: true });
        res.json({
            ok: true,
            areaComunal: areaComunalActualizado
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
    getAreaComunal,
    createAreaComunal,
    deleteAreaComunal,
    updateAreaComunal,
}