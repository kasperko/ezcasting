const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const User = require('../models/User')

// @desc    Profile Page (Dashboard)
// @route   GET /profile
router.get('/', ensureAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).lean()
    res.render('profile/index', {
      user
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    Show edit page
// @route   GET /profile/edit
router.get('/edit', ensureAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).lean()
    res.render('profile/edit', {
      user
    })
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    Update user profile
// @route   PUT /profile
router.put('/', ensureAuth, async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
      runValidators: true
    })
    res.redirect('/profile')
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

module.exports = router