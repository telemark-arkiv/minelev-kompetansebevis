const { send } = require('micro')
const { readFileSync } = require('fs')
const logger = require('./logger')

module.exports.getKompetansebevis = async (request, response) => {
  const { format, studentId } = request.params
  if (!format || !['docx', 'json'].includes(format)) {
    const error = new Error('Missing or invalid format. Valid formats are docx and json')
    logger('error', ['handler-kompetansebevis', 'getKompetansebevis', 'format', format, 'studentId', studentId])
    send(response, 404, error.message)
  } else if (!studentId || studentId !== '1607tops') {
    const error = new Error('Student not found')
    logger('error', ['handler-kompetansebevis', 'getKompetansebevis', 'format', format, 'studentId', studentId])
    send(response, 404, error.message)
  } else {
    const data = require('../test/data/kompetansebevis.json')
    logger('info', ['handler-kompetansebevis', 'getKompetansebevis', 'format', format, 'studentId', studentId])
    if (format === 'json') {
      send(response, 200, data)
    } else {
      const doc = readFileSync('test/data/kompetansebevis.docx')
      response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
      send(response, 200, doc)
    }
  }
}
