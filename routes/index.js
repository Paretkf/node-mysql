const express = require('express')
const router = express.Router()
const { index } = require('../core')
const { getUser, createUser, removeUser, updateUser } = require('../core/user')

router.get('/', index)

// user
router.get('/users', getUser)
router.post('/create-user', createUser)
router.put('/update-user', updateUser)
router.delete('/remove-user', removeUser)

module.exports = router