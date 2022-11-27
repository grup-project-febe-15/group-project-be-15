const { Router } = require('express');
const materialController = require('../controllers/materialController');


const router = Router();

router.get('/material', materialController.material_get);
router.get('/material/:id', materialController.material_get_id);
router.post('/material', materialController.material_post);
router.put('/material/edit/:id', materialController.material_edit);
router.delete('/material/:id', materialController.material_delete)

module.exports = router;