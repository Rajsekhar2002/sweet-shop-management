"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { registerUser, loginUser } = require('../services/authService');
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const token = await registerUser(username, email, password);
        res.status(201).json({ token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await loginUser(username, password);
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = { register, login };
//# sourceMappingURL=authController.js.map