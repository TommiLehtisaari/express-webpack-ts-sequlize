import * as express from 'express'
import author from './author'
import genre from './genre'

export const routes = (app: any) => {
  app.use(express.json())
  app.use('/api/author', author)
  app.use('/api/genre', genre)
}
