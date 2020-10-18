import assert from 'assert'
import { len } from '../src/len'

describe('len()', () => {
  it('should return length', () => {
    assert.strictEqual(len(''), 0)
    assert.strictEqual(len('a'), 1)
    assert.strictEqual(len('ab'), 2)
    assert.strictEqual(len([]), 0)
    assert.strictEqual(len(['a']), 1)
    assert.strictEqual(len(['a', 'b']), 2)
  })
})
