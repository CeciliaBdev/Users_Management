const http = require('http')
const app = require('./database/db')

const server = http.createServer(app)

server.listen(3001, () => {
  console.log('Server is running at localhost:3001')
})
