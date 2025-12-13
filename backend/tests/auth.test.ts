const request = require('supertest');
const app = require('../src/app');

describe('Auth Endpoints', () => {
  it('should register a new user successfully', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'sweet_user',
        password: 'Password123!',
        email: 'test@example.com'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should login a user successfully', async () => {
    // First register
    await request(app)
      .post('/api/auth/register')
      .send({
        username: 'sweet_user2',
        password: 'Password123!',
        email: 'test2@example.com'
      });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'sweet_user2',
        password: 'Password123!'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});