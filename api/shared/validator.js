const validate = require('jsonschema').validate

module.exports = {
  getValidationErrors (data, schema) {
    const validationResult = validate(data, schema)
    
    let errorList = []
    validationResult.errors.forEach(el => {
      errorList.push(el.stack)
    })
    
    return errorList
  }
}
