const index = (request, response) => {
  const currentDate = new Date()
  const data = {
    currentDate
  }
  response.status(200).send(data)
}

module.exports = {
  index
}