const { send } = require('micro')
const logger = require('./logger')

module.exports.getKompetansebevis = async (request, response) => {
  const { format, studentId } = request.params
  logger('info', ['handler-kompetansebevis', 'getKompetansebevis', 'format', format, 'studentId', studentId])
  send(response, 200, {success: true, format: format, studentId: studentId})
}
