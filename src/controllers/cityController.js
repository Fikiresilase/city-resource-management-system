const { success, error } = require('../utils/response')
const { validateCreateCity, validateUpdateCity } = require('../utils/validators')
const service = require('../services/cityService')

async function list(req, res) {
  const data = service.listCities({ q: req.query.q })
  success(res, data)
}

async function get(req, res) {
  const item = service.getCity(req.params.id)
  if (!item) return error(res, 'Not found', 404)
  success(res, item)
}

async function create(req, res) {
  const errors = validateCreateCity(req.body || {})
  if (errors.length) return error(res, 'Invalid fields: ' + errors.join(','), 422)
  const city = service.createCity(req.body)
  success(res, city, 201)
}

async function update(req, res) {
  const errors = validateCreateCity(req.body || {})
  if (errors.length) return error(res, 'Invalid fields: ' + errors.join(','), 422)
  const updated = service.updateCity(req.params.id, req.body)
  if (!updated) return error(res, 'Not found', 404)
  success(res, updated)
}

async function patch(req, res) {
  const errors = validateUpdateCity(req.body || {})
  if (errors.length) return error(res, 'Invalid fields: ' + errors.join(','), 422)
  const updated = service.patchCity(req.params.id, req.body)
  if (!updated) return error(res, 'Not found', 404)
  success(res, updated)
}

async function remove(req, res) {
  const ok = service.removeCity(req.params.id)
  if (!ok) return error(res, 'Not found', 404)
  res.status(204).end()
}

module.exports = { list, get, create, update, patch, remove }
