import Keyz from '@/index.js'

describe('index.js', function () {
  it('should return immutable object', function () {
    expect(() => { Keyz.BACKSPACE = 30 }).toThrow(new TypeError("Attempted to assign to readonly property."))
    expect(Keyz.BACKSPACE).toBe(8);
  });
});