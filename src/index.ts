import * as express from 'express'
import { Request, Response } from 'express'
import { routes } from './routes'

const app = express()

// routes
routes(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT)
})
