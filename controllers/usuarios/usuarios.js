const { response } = require('express');
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../../helpers/jwt");

const Usuario = require('../../models/usuarios/usuario');

const getUsuarios = async(req, res) => {
    
  const desde = Number(req.query.desde) || 0; 

 const [usuarios, total] = await Promise.all([
    Usuario.find({}, 'nombre apellido estado email role img')
                                    .skip(desde)
                                    .limit(10),
    Usuario.countDocuments()

]); 


    res.json({
        ok: true,
        usuarios,
        total
    });

}

const createUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const existeEmail = await Usuario.findOne({ email });

        if ( existeEmail ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            });
        }
        const role1 = '63dd5fb8e4f1b2fcf5bb32d4';
        const usuario = new Usuario( {
            role: role1,
            ...req.body
        }
            );
    
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );
    
    
        // Guardar usuario
        await usuario.save();

        // Generar el TOKEN - JWT
        const token = await generarJWT( usuario.id );


        res.json({
            ok: true,
            usuario,
            token
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }


}

module.exports = {
    getUsuarios,
    createUsuario
}