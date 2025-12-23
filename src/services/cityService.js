const { cities, createCityObject } = require('../mockmodels/cityModel')

function listCities(filter = {}) {
  let result = cities
  if (filter.q) {
    const q = String(filter.q).toLowerCase()
    result = result.filter(c => c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q))
  }
  return result
}

function getCity(id) {
  return cities.find(c => c.id === String(id)) || null
}

function createCity(payload) {
  const city = createCityObject(payload)
  cities.push(city)
  return city
}

function updateCity(id, payload) {
  const idx = cities.findIndex(c => c.id === String(id))
  if (idx === -1) return null
  const existing = cities[idx]
  const updated = {
    ...existing,
    name: payload.name,
    country: payload.country,
    population: payload.population ?? 0,
    area: payload.area ?? 0,
    updatedAt: new Date().toISOString()
  }
  cities[idx] = updated
  return updated
}

function patchCity(id, payload) {
  const idx = cities.findIndex(c => c.id === String(id))
  if (idx === -1) return null
  const existing = cities[idx]
  const updated = {
    ...existing,
    ...payload,
    updatedAt: new Date().toISOString()
  }
  cities[idx] = updated
  return updated
}

function removeCity(id) {
  const idx = cities.findIndex(c => c.id === String(id))
  if (idx === -1) return false
  cities.splice(idx, 1)
  return true
}

module.exports = { listCities, getCity, createCity, updateCity, patchCity, removeCity }
