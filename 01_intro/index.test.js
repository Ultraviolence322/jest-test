const {sum, nativeNull}  = require('./index')

describe('Sum function:', () => {
  it('should return sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
  
  it('should return comparing', () => {
    expect(sum(1, 2)).toBeGreaterThan(-1)
    expect(sum(1, 2)).toBeGreaterThanOrEqual(3)
    expect(sum(1, 2)).toBeLessThan(5)
    expect(sum(1, 2)).toBeLessThanOrEqual(3)
  })
  
  it('correct result of float numbers in sum', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('Native null function:', () => {
  it('should return null', () => {
    expect(nativeNull()).toBe(null) 
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeUndefined()
    expect(nativeNull()).not.toBeTruthy()
  })
})
