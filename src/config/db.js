import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myapp')
  } catch (error) {
    throw new Error('Error al conectar la bbdd', error)
  }
}
