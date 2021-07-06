const { response,request } = require('express');

 const getUsuariosdescartados = (req = request, res = response) => {

  const {nombre,apellido,direccion,ciudad='sin ciudad'} = req.query;


    res.json({
        error:0,
        response: 'Peticion GET usuarios descartados--controller',
        nombre,
        apellido,
        direccion,
        ciudad
    });
  }

  const getUsuarios = (req, res = response)=> {
    res.json({
        error:0,
        response: 'Peticion GET basica del api--controller'
    });
  }

  const putUsuarios = (req, res = response)=> {


    //const body = req.body;

    const id = req.params.id;
    res.json({
        error:0,
        response: 'Peticion PUT basica del api--controller',
        id
    });
  }


  const postUsuarios = (req, res = response)=> {
    const body = req.body;
    res.json({
        error:0,
        response: 'Peticion POST basica del api--controller',
        body
    })
  }


  const deleteUsuarios = (req, res = response)=> {
    res.json({
        error:0,
        response: 'Peticion DELETE basica del api--controllers'
    });
  }

  const patchUsuarios =  (req, res = response)=> {
    res.json({
        error:0,
        response: 'Peticion PATCH basica del api--controllers'
    });
  }

  module.exports = {
    getUsuariosdescartados,
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios,
    patchUsuarios
  }