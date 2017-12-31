const map = require('../config/messageMap')
const unknown = require('../config/unknow')

module.exports = message => {
  let result

  switch (typeof message) {
    case 'string':
      result = map[message.toLowerCase().trim()]
      break

    case 'number':
      result = map[message]
      break
  }

  return result || unknown
}
