const {map} = require('./index.js')

describe('Map function: ', () => {
  let array
  let fn

  beforeEach(() => {
    array = [1, 2, 3, 5]
    fn = jest.fn(x => x * x)
    map(array, fn)

  }) 

  it('should call callback', () => {
    expect(fn).toBeCalled()
  })
  
  it('should call callback 4 times', () => {
    expect(fn).toBeCalledTimes(4)
    expect(fn.mock.calls.length).toBe(4)
  })

  it('should fn work', () => {
    fn
    .mockReturnValueOnce(100)
    .mockReturnValue(25)

    expect(fn()).toBe(100)
    expect(fn()).toBe(25)
    expect(fn()).toBe(25)
    
  })
})
