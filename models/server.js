const express = require('express')
const cors = require('cors')


class Server {
    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.usuariosPath = process.env.USUARIOSPATH;
        // middlewares
        this.middlewares();
        // rutas de mi aplicacion
        this.routes();
    }


    middlewares(){
        // CORS        
        this.app.use( cors() );

        // Lectura y parseo del body 
        this.app.use( express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }


    routes(){
        this.app.use( this.usuariosPath ,require('../routes/usuarios'));
    }

    listen(){        
        this.app.listen(process.env.PORT,()=>{
            console.log('Servidor corriendo en puerto... ',this.port);
        })
    }

}
module.exports = Server;