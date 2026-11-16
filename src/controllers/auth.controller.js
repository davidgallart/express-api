import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }
    const passwordHashed = bcrypt.hashSync(password, 10)
    await User.create({ email, password: passwordHashed })
    res.status(201).json({ message: 'Usuario registrado' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
export const login = (req, res) => {
  res.json('Usuario logeado')
}
