"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restockSweet = exports.purchaseSweet = exports.searchSweetsByQuery = exports.deleteSweetById = exports.updateSweetById = exports.getSweetById = exports.getSweets = exports.addSweet = void 0;
const Sweet_js_1 = require("../models/Sweet.js");
const addSweet = async (sweet) => {
    return await (0, Sweet_js_1.createSweet)(sweet);
};
exports.addSweet = addSweet;
const getSweets = async () => {
    return await (0, Sweet_js_1.getAllSweets)();
};
exports.getSweets = getSweets;
const getSweetById = async (id) => {
    return await (0, Sweet_js_1.findSweetById)(id);
};
exports.getSweetById = getSweetById;
const updateSweetById = async (id, updates) => {
    await (0, Sweet_js_1.updateSweet)(id, updates);
};
exports.updateSweetById = updateSweetById;
const deleteSweetById = async (id) => {
    await (0, Sweet_js_1.deleteSweet)(id);
};
exports.deleteSweetById = deleteSweetById;
const searchSweetsByQuery = async (query) => {
    return await (0, Sweet_js_1.searchSweets)(query);
};
exports.searchSweetsByQuery = searchSweetsByQuery;
const purchaseSweet = async (id, quantity) => {
    const sweet = await (0, Sweet_js_1.findSweetById)(id);
    if (!sweet) {
        throw new Error('Sweet not found');
    }
    if (sweet.quantity < quantity) {
        throw new Error('Insufficient stock');
    }
    await (0, Sweet_js_1.updateSweet)(id, { quantity: sweet.quantity - quantity });
};
exports.purchaseSweet = purchaseSweet;
const restockSweet = async (id, quantity) => {
    const sweet = await (0, Sweet_js_1.findSweetById)(id);
    if (!sweet) {
        throw new Error('Sweet not found');
    }
    await (0, Sweet_js_1.updateSweet)(id, { quantity: sweet.quantity + quantity });
};
exports.restockSweet = restockSweet;
//# sourceMappingURL=sweetService.js.map