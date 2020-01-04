import * as express from 'express'
import { Response, Request } from 'express'
const router = express.Router()
import store from '../store'

router.post('/', async (req: Request, res: Response) => {
  const { name, born } = req.body
  let author = {}
  try {
    author = await store.Author.create({ name, born })
  } catch (exception) {
    console.log(exception)
  } finally {
    res.send(author)
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const authors = await store.Author.findAll({ where: { id } })
  const statusCode = Array.isArray(authors) && authors.length === 0 ? 404 : 200
  res.status(statusCode).send(authors)
})

router.get('/', async (_, res: Response) => {
  const authors = await store.Author.findAll()
  const statusCode = Array.isArray(authors) && authors.length === 0 ? 404 : 200
  res.status(statusCode).send(authors)
})

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const authors = await store.Author.findAll({ where: { id } })
  if (authors.length === 0) return res.status(404).send()

  store.Author.update(
    {
      name: req.body.name || authors[0].name,
      born: req.body.born || authors[0].born
    },
    { where: { id } }
  )
  res.status(202).send()
})

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const author = await store.Author.destroy({ where: { id } })
  const status = author === 1 ? 202 : 404
  res.status(status).send()
})

export default router
