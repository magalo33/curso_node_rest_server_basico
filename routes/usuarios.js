const { Router } = require('express');
const { getUsuariosdescartados,getUsuarios,putUsuarios,postUsuarios,deleteUsuarios,patchUsuarios} = require('../controllers/usuarios');
const router = Router();


router.get('/descartados',getUsuariosdescartados);
router.get('/', getUsuarios);
router.put('/', putUsuarios);
router.put('/:id', putUsuarios);
router.post('/', postUsuarios);
router.delete('/', deleteUsuarios);
router.patch('/',patchUsuarios)

module.exports = router;