import * as express from 'express'
import { Request, Response } from 'express'
import store from '../store'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  const { name } = req.body
  if (!name) res.status(400).send({ message: 'name required' })
  const genre = await store.Genre.create({ name })
  res.send(genre)
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const genre = await store.Genre.findAll({ where: { id } })
  res.send(genre)
})

router.get('/', async (req: Request, res: Response) => {
  const genres = await store.Genre.findAll()
  res.send(genres)
})

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const genre = await store.Genre.findAll({ where: { id } })
  if (genre.length === 0) return res.status(404).send()

  store.Genre.update(
    {
      name: req.body.name || genre[0].name
    },
    { where: { id } }
  )
  res.status(202).send()
})

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const genre = await store.Genre.destroy({ where: { id } })
  const status = genre === 1 ? 202 : 404
  res.status(status).send()
})

export default router
