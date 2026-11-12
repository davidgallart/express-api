import express from 'express'
import morgan from 'morgan'
const app = express()
app.use(express.json())
app.use(morgan('dev'))
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/users', (req, res) => {
  res.json({})
})

app.post('/users', (req, res) => {
  console.log(req.body)
  res.status(201).json('Usuario creado')
})

app.put('/users/:id', (req, res) => {
  console.log(req.params.id)
  res.json('Usuario modificado')
})

app.delete('/users/:id', (req, res) => {
  res.json('Usuario borrado')
})
