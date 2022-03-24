// STRETCH
const cars = [
    {
        vin: '1GCJK33104F173427',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '3C3CFFCR7CT272159',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
        transmission: 'manual'
    },
    {
        vin: 'JN8AZ1MU7AW004224',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
        title: 'clean'
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}