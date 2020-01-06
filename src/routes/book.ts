import * as express from 'express'
import { Request, Response } from 'express'
import { Op } from 'sequelize'
import validateUUID from '../utils/uuidValidator'
import store from '../store'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  const { title, published, pages, authorId, genreId } = req.body
  // Minimal validation
  if ((!genreId && validateUUID(genreId)) || (!authorId && validateUUID(authorId))) {
    res.status(400).send({
      error: {
        details: "fields 'genreId' and 'authorId' required. Check validation of the UUID."
      }
    })
  }
  const genres = await store.Genre.findAll({ where: { id: { [Op.in]: genreId } } })
  if (genres.length === 0) return res.status(404).send({ message: `Genre not found` })
  const author = await store.Author.findAll({ where: { id: authorId } })
  if (author.length === 0) return res.status(404).send({ message: `Author not found` })

  try {
    const book = await store.Book.create({ title, published, pages })
    book.setAuthor(author[0])
    book.addGenre(genreId)
    res.status(201).send(book)
  } catch (exeption) {
    console.log(exeption)
    res.status(500).send()
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (!validateUUID(id)) return res.status(404).send({ message: 'malformed uuid' })
  try {
    const book = await store.Book.findAll({ where: { id } })
    if (book.length === 0) res.status(404).send({ message: 'book not found' })
    res.send(book[0])
  } catch {
    res.status(400).send({ message: 'Malformed uuid' })
  }
})

router.get('/', async (_, res: Response) => {
  const books = await store.Book.findAll()
  res.send(books)
})

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, published, pages, authorId, genreId } = req.body

  if (!validateUUID(id)) return res.status(400).send({ message: 'Malformated book uuid' })
  const book = await store.Book.findAll({ where: { id } })
  if (book.length === 0) return res.status(404).send({ message: 'book not found' })

  if (genreId && validateUUID(genreId)) {
    const genres = await store.Genre.findAll({ where: { id: { [Op.in]: genreId } } })
    if (genres.length === 0) return res.status(404).send({ message: `Genre not found` })
    book[0].setGenres(genres)
  }

  if (authorId && validateUUID(authorId)) {
    const author = await store.Author.findAll({ where: { id: authorId } })
    if (author.length === 0) return res.status(404).send({ message: `Author not found` })
    book[0].setAuthor(author[0])
  }

  book[0].update({
    title: title || book[0].title,
    published: published || book[0].published,
    pages: pages || book[0].pages
  })

  res.status(202).send(book[0])
})

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (!validateUUID(id)) return res.status(400).send({ message: 'Malformated book uuid' })
  const book = await store.Book.destroy({ where: { id } })
  const status = book === 1 ? 202 : 404
  res.status(status).send()
})

export default router
