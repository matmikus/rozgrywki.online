const validate = require('jsonschema').validate
const $RefParser = require('json-schema-ref-parser')

module.exports = {
  getValidationErrors: async function (data, schema) {
    const validationResult = validate(data, await $RefParser.dereference(schema))

    return validationResult.errors.map(el => el.stack)
  }
}
