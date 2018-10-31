const { db } = require('../config')

const createUser = (request, response) => {
  const name = request.body.name
  const address = request.body.address
  const id = request.body.id
  const sql = `INSERT INTO customers (name, address, id) VALUES ("${name}", "${address}", "${id}")`
  db.query(sql,  (err, result, field)  => {
    let res = {
      data: {},
      succeess: 0
    }
    if (err) {
      res.data = err
    } else if (result) {
      res.data = result
      res.succeess = 1
    }
    response.status(200).send(res)
  })
}

const getUser = (request, response) => {
  const sql = `SELECT * FROM customers`
  db.query(sql,  (err, result, field)  => {
    let res = {
      data: {},
      succeess: 0
    }
    if (err) {
      res.data = err
    } else if (result) {
      res.data = result
      res.succeess = 1
    }
    response.status(200).send(res)
  })
}

const removeUser = (request, response) => {
  const id = request.query.id
  const sql = `DELETE FROM customers where customers.id = ${id}`
  db.query(sql,  (err, result, field)  => {
    let res = {
      data: {},
      succeess: 0
    }
    if (err) {
      res.data = err
    } else if (result) {
      res.data = result
      res.succeess = 1
    }
    response.status(200).send(res)
  })
}
const updateUser = (request, response) => {
  const name = request.body.name
  const address = request.body.address
  const id = request.query.id
  const sql = `UPDATE customers SET name = "${name}", address = "${address}" where customers.id = ${id}`
  db.query(sql,  (err, result, field)  => {
    let res = {
      data: {},
      succeess: 0
    }
    if (err) {
      res.data = err
    } else if (result) {
      res.data = result
      res.succeess = 1
    }
    response.status(200).send(res)
  })
}

module.exports = {
  createUser,
  getUser,
  removeUser,
  updateUser
}