const { response } = require('express');

// Llamar al modelo
const TipoInmueble = require('../../models/administracion/tipo_inmueble');

const getTipoInmueble = async(req, res) => {

const  tipo_inmueble =  await TipoInmueble.find();

    res.json({
        ok: true,
        tipo_inmueble: tipo_inmueble
    });
    
}

const createTipoInmueble = async (req, res = response) =>{
    const uid = req.uid;
    const tipo_inmueble = new TipoInmueble({
        usuario: uid,
        ...req.body
    });

    try {

        const tipo_inmuebleDB = await tipo_inmueble.save();

        res.json({
        ok: true,
        tipo_inmueble: tipo_inmuebleDB
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
};

const updateTipoInmueble= async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const tipo_inmueble = await TipoInmueble.findById( id );

        if ( !tipo_inmueble ) {
            return res.status(404).json({
                ok: true,
                msg: 'Tipo Inmueble no encontrado por id',
            });
        }

        const cambiosTipoInmueble = {
            ...req.body,
            usuario: uid
        }

        const htipoInmuebleActualizado = await TipoInmueble.findByIdAndUpdate( id, cambiosTipoInmueble, { new: true } );


        res.json({
            ok: true,
            tipo_inmueble: htipoInmuebleActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};


const deleteTipoInmueble = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const tipo_inmueble = await TipoInmueble.findById( id );

        if ( !tipo_inmueble ) {
            return res.status(404).json({
                ok: true,
                msg: 'Tipo Inmueble no encontrado por id',
            });
        }

        const cambiosTipoInmueble = {
            ...req.body,
            usuario: uid,
            estado:false
        }

        const htipoInmuebleActualizado = await TipoInmueble.findByIdAndUpdate( id, cambiosTipoInmueble,{ new: true } );


        res.json({
            ok: true,
            tipo_inmueble: htipoInmuebleActualizado
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
    getTipoInmueble,
    createTipoInmueble,
    updateTipoInmueble,
    deleteTipoInmueble
}