"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { addSweet, getSweets, getSweetById, updateSweetById, deleteSweetById, searchSweetsByQuery, purchaseSweet, restockSweet } = require('../services/sweetService');
const createSweet = async (req, res) => {
    try {
        const id = await addSweet(req.body);
        res.status(201).json({ message: "Sweet added", id });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
const getAllSweets = async (req, res) => {
    try {
        const sweets = await getSweets();
        res.json(sweets);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// 🔥 FIXED — correct function name for search
const searchSweets = async (req, res) => {
    try {
        const query = req.query.q;
        const results = await searchSweetsByQuery(query);
        res.json(results);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const updateSweet = async (req, res) => {
    try {
        await updateSweetById(req.params.id, req.body);
        res.json({ message: "Sweet updated" });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
const deleteSweet = async (req, res) => {
    try {
        await deleteSweetById(req.params.id);
        res.json({ message: "Sweet deleted" });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
const purchase = async (req, res) => {
    try {
        await purchaseSweet(req.params.id, req.body.quantity);
        res.json({ message: "Purchase successful" });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
const restock = async (req, res) => {
    try {
        await restockSweet(req.params.id, req.body.quantity);
        res.json({ message: "Stock updated" });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
module.exports = {
    addSweet: createSweet,
    getSweets: getAllSweets,
    searchSweets,
    updateSweet,
    deleteSweet,
    purchaseSweet: purchase,
    restockSweet: restock
};
//# sourceMappingURL=sweetController.js.map