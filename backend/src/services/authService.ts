const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername, findUserByEmail } = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const registerUser = async (username: string, email: string, password: string): Promise<string> => {
  const existingUser = await findUserByUsername(username) || await findUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await createUser({ username, email, password: hashedPassword, role: 'user' });
  const token = jwt.sign({ id: userId, username, role: 'user' }, JWT_SECRET);
  return token;
};

const loginUser = async (username: string, password: string): Promise<string> => {
  const user = await findUserByUsername(username);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET);
  return token;
};

const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = { registerUser, loginUser, verifyToken };