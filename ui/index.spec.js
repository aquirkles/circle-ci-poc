import app from './index'

describe('ui app', () => {
  it('works as expected', () => {
    expect(app('hello world')).toEqual('A MESSAGE FROM THE UI: HELLO WORLD')
  })
})