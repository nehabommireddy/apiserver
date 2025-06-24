// tests/api.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const connectDB = require('../db');
const app = require('../server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await connectDB(uri);
}, 20000); // Extend timeout just in case

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('API: Todo Endpoints', () => {
  it('GET /items should return 200', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  }, 10000); // timeout for this test
});