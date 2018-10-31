const { app, port } = require('./config')
const routes    = require('./routes')

app.use('', routes)

app.listen(port)
console.log('Server is running on port: ' + port)

module.exports = app
