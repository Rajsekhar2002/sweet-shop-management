const db = require('./database');

interface Sweet {
  id?: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

const createSweet = (sweet: Sweet): Promise<number> => {
  return new Promise((resolve, reject) => {
    const { name, category, price, quantity, imageUrl } = sweet;
    db.run(
      'INSERT INTO sweets (name, category, price, quantity, imageUrl) VALUES (?, ?, ?, ?, ?)',
      [name, category, price, quantity, imageUrl],
      function(err: Error | null) {
        if (err) reject(err);
        else resolve((this as any).lastID);
      }
    );
  });
};

const getAllSweets = (): Promise<Sweet[]> => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM sweets', (err: Error | null, rows: Sweet[]) => {
      if (err) reject(err);
      else resolve(rows as Sweet[]);
    });
  });
};

const findSweetById = (id: number): Promise<Sweet | null> => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM sweets WHERE id = ?', [id], (err: Error | null, row: Sweet | undefined) => {
      if (err) reject(err);
      else resolve(row as Sweet | null);
    });
  });
};

const updateSweet = (id: number, sweet: Partial<Sweet>): Promise<void> => {
  return new Promise((resolve, reject) => {
    const fields = Object.keys(sweet);
    const values = Object.values(sweet);
    const setClause = fields.map(field => `${field} = ?`).join(', ');
    db.run(
      `UPDATE sweets SET ${setClause} WHERE id = ?`,
      [...values, id],
      function(err: Error | null) {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};

const deleteSweet = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM sweets WHERE id = ?', [id], function(err: Error | null) {
      if (err) reject(err);
      else resolve();
    });
  });
};

const searchSweets = (query: string): Promise<Sweet[]> => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM sweets WHERE name LIKE ? OR category LIKE ?';
    const searchTerm = `%${query}%`;
    db.all(sql, [searchTerm, searchTerm], (err: Error | null, rows: Sweet[]) => {
      if (err) reject(err);
      else resolve(rows as Sweet[]);
    });
  });
};

export { createSweet, getAllSweets, findSweetById, updateSweet, deleteSweet, searchSweets };