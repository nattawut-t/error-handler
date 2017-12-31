const map = require('../config/codeMap')
const unknown = require('../config/unknow')

module.exports = code => {
  const result = map[code]
  return result || unknown
}
