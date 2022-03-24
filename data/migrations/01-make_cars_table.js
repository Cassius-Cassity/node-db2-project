exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id') // creates an id column, auto increments integers and is the primary key.
    tbl.string('vin', 17).unique().notNullable() // creates a vin coloumn unique checks against other vin numbers in database
    tbl.string('make', 120).notNullable() 
    tbl.string('model', 120).notNullable()
    tbl.integer('mileage').unsigned().notNullable()
    tbl.string('title', 120)
    tbl.string('transmission', 120)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
