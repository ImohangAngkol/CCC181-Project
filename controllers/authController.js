const User = require('../models/User')

// Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({ name, email, password })
    await user.save()
    res.status(201).json({ message: 'User created', user })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    res.json({ message: 'Login successful', user })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
