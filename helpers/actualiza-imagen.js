const fs = require('fs');

const Usuario = require('../models/usuarios/usuario')

const actualizarImage = async (tipo, id, path, nombreArchivo) =>{

    switch (tipo) {
        case 'usuarios':
            const usuario = await Usuario.findById(id)
            if(!usuario){
                console.log('No es un usuario');
                return false;
            }
            const pathViejo = `./uploads/usuarios/${usuario.img}`;
            if(fs.existsSync(pathViejo)){
                // borrar la imagen anterior
                fs.unlinkSync(pathViejo);
            }
            usuario.img = nombreArchivo;
            await usuario.save();
            return true;
        break;
        case 'condominos':
            
        break;
    
        default:
            break;
    }


}


module.exports = {
    actualizarImage
}