const db = require('./database');

interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  role: string;
}

const createUser = (user: User): Promise<number> => {
  return new Promise((resolve, reject) => {
    const { username, email, password, role } = user;
    db.run(
      'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
      [username, email, password, role],
      function(err: Error | null) {
        if (err) reject(err);
        else resolve((this as any).lastID);
      }
    );
  });
};

const findUserByUsername = (username: string): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err: Error | null, row: User | undefined) => {
      if (err) reject(err);
      else resolve(row as User | null);
    });
  });
};

const findUserByEmail = (email: string): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE email = ?', [email], (err: Error | null, row: User | undefined) => {
      if (err) reject(err);
      else resolve(row as User | null);
    });
  });
};

export { createUser, findUserByUsername, findUserByEmail };