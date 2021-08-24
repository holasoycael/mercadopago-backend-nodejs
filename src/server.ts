import mongoose from 'mongoose'
import express, { Request, Response } from 'express'
import cors from 'cors'

import { router } from './routes'

mongoose.connect('mongodb://localhost:27017/mercadopago', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Erorr'
  })
})

app.listen(5000, () => console.log(`🔥 Server started!`))
