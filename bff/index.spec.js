import app from './index'

describe('bff app', () => {
  it('works as expected', () => {
    expect(app('hello world')).toEqual('A MESSAGE FROM THE BFF: HELLO WORLD')
  })
})