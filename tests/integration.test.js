// tests/integration.test.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../server');
const Item = require('../models/Item');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Item.deleteMany();
});

describe('Integration: CRUD operations', () => {
  it('should create a new item', async () => {
    const res = await request(app).post('/items').send({ name: 'Test item' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test item');
  });

  it('should get all items', async () => {
    await new Item({ name: 'Test item' }).save();
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('should update an item', async () => {
    const item = await new Item({ name: 'Task' }).save();
    const res = await request(app)
      .put(`/items/${item._id}`)
      .send({ completed: true });
    expect(res.body.completed).toBe(true);
  });

  it('should delete an item', async () => {
    const item = await new Item({ name: 'Delete me' }).save();
    const res = await request(app).delete(`/items/${item._id}`);
    expect(res.statusCode).toBe(200);
  });
});