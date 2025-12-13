"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const { register, login } = require('../controllers/authController');
const router = Router();
router.post('/register', register);
router.post('/login', login);
module.exports = router;
//# sourceMappingURL=auth.js.map