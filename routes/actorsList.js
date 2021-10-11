const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const User = require('../models/User')

// @desc    Casting Director View (CD Dashboard)
// @route   GET /actorsList
router.get('/', ensureAuth, async (req, res) => {
  try {
    const users = await User.find({}).lean()
    res.render('actorsList', {
      users
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

module.exports = router