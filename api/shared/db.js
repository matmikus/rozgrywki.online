const {Client} = require('pg')

module.exports = {
  databaseClient () {
    const databaseClient = (process.env.DATABASE_URL !== undefined ? {
      connectionString: process.env.DATABASE_URL,
      ssl: true
    } : require('../../local_postgres_config').localClientData())
    
    const client = new Client(databaseClient)
    
    client.connect()
    
    return client
  }
}
