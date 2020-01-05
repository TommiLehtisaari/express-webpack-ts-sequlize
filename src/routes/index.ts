import * as express from 'express'
import author from './author'
import genre from './genre'
import book from './book'

export const routes = (app: any) => {
  app.use(express.json())
  app.use('/api/author', author)
  app.use('/api/genre', genre)
  app.use('/api/book', book)
}
