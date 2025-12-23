const cities = []
let idCounter = 1
function createCityObject({ name, country, population = 0, area = 0 }) {
  const now = new Date().toISOString()
  return {
    id: String(idCounter++),
    name,
    country,
    population,
    area,
    createdAt: now,
    updatedAt: now
  }
}
module.exports = { cities, createCityObject }
