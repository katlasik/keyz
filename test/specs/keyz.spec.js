import { Keys } from '@/index.js'

describe('index.js', function () {
  it('should return immutable object', function () {
    expect(function () {
      Keys.BACKSPACE = 30
    }).toThrow(new TypeError("Attempted to assign to readonly property."))
    expect(Keys.BACKSPACE).toBe(8);
  });
});