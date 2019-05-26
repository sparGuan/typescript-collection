const util = require('../src/util');
const assert = require('assert');
const Queue = require('../src/Queue');
describe('collection test', () => {
  it('queue', async () => {
    const queue = new Queue();
    queue.enqueue(1);
    const pri = queue.print();
    assert.ok(pri === '[1]');
  });
});
