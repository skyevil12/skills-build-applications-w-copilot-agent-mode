import express from 'express'
import mongoose from 'mongoose'
import { Activity } from './models/Activity.js'

const app = express()
const PORT = Number(process.env.PORT ?? 8000)
const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_tracker'

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    service: 'octofit-backend',
    status: 'ok',
    mongoState: mongoose.connection.readyState,
    model: Activity.modelName,
  })
})

app.listen(PORT, () => {
  console.log(`OctoFit backend listening on http://localhost:${PORT}`)
})

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB on port 27017')
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message)
  })
