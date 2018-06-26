import app from './index'

describe('ui app', () => {
  it('works as expected', () => {
    expect(app('hello world')).toEqual("A_MESSAGE_FROM_THE_UI:_HELLO_WORLD")
  })
})