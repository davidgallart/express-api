import express from 'express'
import morgan from 'morgan'
import router from './routes/index.js'
import { dbConnection } from './config/db.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('dev'))
app.use('/', router)

dbConnection()
  .then(() => {
    console.log('Database connected')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(e => {
    console.log('Error al conectar la BBDD: ', e)
  })

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})
