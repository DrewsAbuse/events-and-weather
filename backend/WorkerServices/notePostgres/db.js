const Client = require('pg').Client
const { secret } = require('./secretLinks')
const client = new Client({
  connectionString: secret,
  ssl: {
    rejectUnauthorized: false,
  },
})
client.connect()
const query = {
  // give the query a unique name
  name: 'fetch-user',
  text: 'select * from notes ',
}
client
  .query(query)
  .then((res) => console.log(res.rows[0]))
  .catch((e) => console.error(e.stack))

module.exports = client
