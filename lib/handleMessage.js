const map = require('../config')

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

  return result || {
    code: 520,
    message: 'Unknown',
  }
}
