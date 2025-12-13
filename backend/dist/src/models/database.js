"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require('sqlite3');
const { promisify } = require('util');
const db = new sqlite3.Database(process.env.NODE_ENV === 'test' ? ':memory:' : (process.env.DATABASE_URL || './database.db'));
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user'
    )
  `);
    db.run(`
    CREATE TABLE IF NOT EXISTS sweets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 0,
      imageUrl TEXT
    )
  `);
    // Insert sample sweets if table is empty
    db.get('SELECT COUNT(*) as count FROM sweets', (err, row) => {
        if (!err && row.count === 0) {
            const sampleSweets = [
                { name: 'Chocolate Cake', category: 'Cake', price: 25.99, quantity: 10, imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300' },
                { name: 'Strawberry Ice Cream', category: 'Ice Cream', price: 5.99, quantity: 20, imageUrl: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300' },
                { name: 'Vanilla Cupcake', category: 'Cupcake', price: 3.99, quantity: 15, imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300' },
                { name: 'Caramel Popcorn', category: 'Candy', price: 7.99, quantity: 12, imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300' },
                { name: 'Chocolate Chip Cookies', category: 'Cookie', price: 4.99, quantity: 25, imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300' },
                { name: 'Fudge Brownie', category: 'Brownie', price: 6.49, quantity: 18, imageUrl: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=300' },
                { name: 'Lemon Tart', category: 'Tart', price: 8.99, quantity: 8, imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=300' },
                { name: 'Mint Chocolate Chip Ice Cream', category: 'Ice Cream', price: 6.49, quantity: 22, imageUrl: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300' },
                { name: 'Red Velvet Cake', category: 'Cake', price: 28.99, quantity: 5, imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300' },
                { name: 'Gummy Bears', category: 'Candy', price: 3.49, quantity: 30, imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300' },
            ];
            sampleSweets.forEach(sweet => {
                db.run('INSERT INTO sweets (name, category, price, quantity, imageUrl) VALUES (?, ?, ?, ?, ?)', [sweet.name, sweet.category, sweet.price, sweet.quantity, sweet.imageUrl]);
            });
        }
    });
});
module.exports = db;
//# sourceMappingURL=database.js.map