function isNonEmptyString(x) {
  return typeof x === 'string' && x.trim().length > 0
}
function isNonNegativeNumber(x) {
  return typeof x === 'number' && isFinite(x) && x >= 0
}
function validateCreateCity(body) {
  const errors = []
  if (!isNonEmptyString(body.name)) errors.push('name')
  if (!isNonEmptyString(body.country)) errors.push('country')
  if (body.population !== undefined && !isNonNegativeNumber(body.population)) errors.push('population')
  if (body.area !== undefined && !isNonNegativeNumber(body.area)) errors.push('area')
  return errors
}
function validateUpdateCity(body) {
  const errors = []
  if (body.name !== undefined && !isNonEmptyString(body.name)) errors.push('name')
  if (body.country !== undefined && !isNonEmptyString(body.country)) errors.push('country')
  if (body.population !== undefined && !isNonNegativeNumber(body.population)) errors.push('population')
  if (body.area !== undefined && !isNonNegativeNumber(body.area)) errors.push('area')
  return errors
}
module.exports = { validateCreateCity, validateUpdateCity }
