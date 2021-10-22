const {Ajax} = require('./index')
const axios = require('axios')

jest.mock('axios')

describe('Ajax: echo: ', () => {
  it('should return value async', async () => {
    const data = await Ajax.echo('data string')

    expect(data).toBe('data string')
  })

  it('should return value promise', () => {
    Ajax.echo('data string').then(data => {
      expect(data).toBe('data string')
    })
  })

  it('should return error async', async () => {
    try {
      await Ajax.echo()
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })

  it('should return error promise', () => {
    Ajax.echo().catch(error => {
      expect(error).toBeInstanceOf(Error)
    })
  })
})

describe('Ajax: get:', () => {
  it('should return data from backend', async () => {
    axios.get.mockImplementation(() => {
      return Promise.resolve({ data: '123' })
    });

    return Ajax.get().then(data => {
      expect(data).toBe('123')
    })
  })
})
