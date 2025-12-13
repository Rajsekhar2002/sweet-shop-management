"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.findUserByUsername = exports.createUser = void 0;
const db = require('./database');
const createUser = (user) => {
    return new Promise((resolve, reject) => {
        const { username, email, password, role } = user;
        db.run('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)', [username, email, password, role], function (err) {
            if (err)
                reject(err);
            else
                resolve(this.lastID);
        });
    });
};
exports.createUser = createUser;
const findUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
            if (err)
                reject(err);
            else
                resolve(row);
        });
    });
};
exports.findUserByUsername = findUserByUsername;
const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
            if (err)
                reject(err);
            else
                resolve(row);
        });
    });
};
exports.findUserByEmail = findUserByEmail;
//# sourceMappingURL=User.js.map