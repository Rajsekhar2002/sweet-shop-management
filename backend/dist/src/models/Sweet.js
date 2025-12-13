"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSweets = exports.deleteSweet = exports.updateSweet = exports.findSweetById = exports.getAllSweets = exports.createSweet = void 0;
const db = require('./database');
const createSweet = (sweet) => {
    return new Promise((resolve, reject) => {
        const { name, category, price, quantity, imageUrl } = sweet;
        db.run('INSERT INTO sweets (name, category, price, quantity, imageUrl) VALUES (?, ?, ?, ?, ?)', [name, category, price, quantity, imageUrl], function (err) {
            if (err)
                reject(err);
            else
                resolve(this.lastID);
        });
    });
};
exports.createSweet = createSweet;
const getAllSweets = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM sweets', (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
};
exports.getAllSweets = getAllSweets;
const findSweetById = (id) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM sweets WHERE id = ?', [id], (err, row) => {
            if (err)
                reject(err);
            else
                resolve(row);
        });
    });
};
exports.findSweetById = findSweetById;
const updateSweet = (id, sweet) => {
    return new Promise((resolve, reject) => {
        const fields = Object.keys(sweet);
        const values = Object.values(sweet);
        const setClause = fields.map(field => `${field} = ?`).join(', ');
        db.run(`UPDATE sweets SET ${setClause} WHERE id = ?`, [...values, id], function (err) {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
};
exports.updateSweet = updateSweet;
const deleteSweet = (id) => {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM sweets WHERE id = ?', [id], function (err) {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
};
exports.deleteSweet = deleteSweet;
const searchSweets = (query) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM sweets WHERE name LIKE ? OR category LIKE ?';
        const searchTerm = `%${query}%`;
        db.all(sql, [searchTerm, searchTerm], (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
};
exports.searchSweets = searchSweets;
//# sourceMappingURL=Sweet.js.map