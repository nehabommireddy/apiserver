// tests/unititemModel.test.js
const Item = require('../models/Item');

describe('Item Model', () => {
  it('should create an item with a name', () => {
    const item = new Item({ name: 'Test task' });
    expect(item.name).toBe('Test task');
    expect(item.completed).toBe(false);
  });

  it('should default completed to false', () => {
    const item = new Item({ name: 'Another task' });
    expect(item.completed).toBe(false);
  });
});