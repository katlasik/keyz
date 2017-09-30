import Keys from '@/index.js'
import { ENTER, SLASH } from '@/index.js'

describe('index.js', function () {
  it('should return immutable object', function () {
    expect(function () {
      Keys.BACKSPACE = 30
    }).toThrow(new TypeError("Attempted to assign to readonly property."))
    expect(Keys.BACKSPACE).toBe(8)
  })

  it('should should export separate keys and whole object', function () {
    expect(Keys.ENTER).toBe(ENTER)
    expect(Keys.ENTER).toBe(13)
    expect(Keys.SLASH).toBe(SLASH)
    expect(Keys.SLASH).toBe(191)
  })
})