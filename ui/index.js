import { compose } from '@telusdigital/isomorphic-core'

const toUpper = str => str.toUpperCase()
const replaceSpacesWithUnderscores = str => str.replace(/ /g,"_")
const prepend = str => `A message from the UI: ${str}`

export default message => compose(replaceSpacesWithUnderscores, toUpper, prepend)(message)