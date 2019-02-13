const {Client} = require('pg')

module.exports = {
  databaseClient () {
    const databaseClient = {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_SSL === 'true'
    }
    
    const client = new Client(databaseClient)
    
    client.connect()
    
    return client
  }
}
