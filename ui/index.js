import { compose } from '@telusdigital/isomorphic-core'

const toUpper = str => str.toUpperCase()
const prepend = str => `A message from the UI: ${str}`

export default message => compose(toUpper, prepend)(message)