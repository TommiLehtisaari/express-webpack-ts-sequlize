import * as express from 'express'
import { Request, Response } from 'express'
import { Op } from 'sequelize'
import store from '../store'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  const { title, published, pages, authorId, genreId } = req.body
  // Minimal validation
  if (!genreId || !authorId) {
    res.status(400).send({
      error: {
        details: "fields 'genreId' and 'authorId' required"
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

// router.put('/:id', async (req: Request, res: Response) => {
//   const { id, name, published, pages, authorId, genreId } = req.params
//   try {
//     const book = await store.Book.findAll({ where: { id } })
//     if (book.length === 0) res.status(404).send({ message: 'book not found' })
//     res.status(202).send()
//   } catch {
//     res.status(500).send()
//   }
// })

export default router
