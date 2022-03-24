// no need to change this file
// shared config meaning the program has a limited number of programs it id going to run in. 
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true, //sqlite
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: { // sqlite
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/dealer.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testing.db3' },
  },
}
