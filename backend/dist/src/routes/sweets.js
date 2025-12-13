"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const { authenticate, authorizeAdmin } = require('../middleware/auth');
const { addSweet, getSweets, searchSweets, updateSweet, deleteSweet, purchaseSweet, restockSweet } = require('../controllers/sweetController');
const router = Router();
router.use(authenticate);
router.post('/', authorizeAdmin, addSweet);
router.get('/', getSweets);
router.get('/search', searchSweets);
router.put('/:id', authorizeAdmin, updateSweet);
router.delete('/:id', authorizeAdmin, deleteSweet);
router.post('/:id/purchase', purchaseSweet);
router.post('/:id/restock', authorizeAdmin, restockSweet);
module.exports = router;
//# sourceMappingURL=sweets.js.map