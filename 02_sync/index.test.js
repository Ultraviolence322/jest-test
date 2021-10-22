const {Lodash} = require('./index')
const _ = new Lodash()

describe('Lodash: compact: ', () => {
  it('should be defined', () => {
    expect(_.compact).toBeDefined()
  })

  it('should remove falsy', () => {
    const array = [0, '0', false, '', true, 'hi', undefined, 'null', 'undefined', null, 5]
    const result = ['0', true, 'hi', 'null', 'undefined', 5]

    expect(_.compact(array)).toEqual(result)
  })
})

describe('Lodash: groupBy', () => {
  it('should be defined', () => {
    expect(_.groupBy).toBeDefined()
  })

  it('should group by Math.floor', () => {
    const array = [2.2, 4.2, 2.1, 5, 4, 3.1, 2.1]
    const result = {
      2: [2.2, 2.1, 2.1],
      4: [4.2, 4],
      5: [5],
      3: [3.1],
    }

    expect(_.groupBy(array, Math.floor)).toEqual(result)
  })

  it('should group by length', () => {
    const array = ['one', 'two', 'three', 'some-big', 'one']
    const result = {
      3: ['one', 'two', 'one'],
      5: ['three'],
      8: ['some-big']
    }

    expect(_.groupBy(array, 'length')).toEqual(result)
  })

  it('result should be an object', () => {
    expect(_.groupBy([], Math.trunc)).toBeInstanceOf(Object)
  })
})