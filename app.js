const { app, port } = require('./config')
const routes    = require('./routes')

app.use('', routes)

const PORT = process.env.port ? process.env.port : port

app.listen(PORT)
console.log('Server is running on port: ' + PORT)

module.exports = app
