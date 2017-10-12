'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const uploadApi = require('./api')
const uploadUi = require('./ui')

const createUploadEncoded = function (event) {
  event.preventDefault()
  console.log('it did something')

  const data = getFormFields(event.target)

  uploadApi.createEnc(data)
    .then(uploadUi.success)
    .catch(uploadUi.error)
}

const createUploadMultiPart = function (event) {
  event.preventDefault()
  console.log('it did something in multipart')

  const formData = new FormData(event.target)
  console.log('data is ', formData)
  uploadApi.createMulti(formData)
    .then(uploadUi.success)
    .catch(uploadUi.error)
}

module.exports = {
  createUploadEncoded,
  createUploadMultiPart
}
