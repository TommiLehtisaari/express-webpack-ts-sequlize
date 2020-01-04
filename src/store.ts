import { Sequelize } from 'sequelize'
import AuthorModel from './models/author'
import GenreModel from './models/genre'
import BookModel from './models/book'

const sequelize = new Sequelize('books', 'node_user', 'XC3cpdrQEY3pGCm3P74cwzfx63rx', {
  host: 'localhost',
  dialect: 'postgres'
})

// Tables initialization
const Author = AuthorModel(sequelize)
const Genre = GenreModel(sequelize)
const Book = BookModel(sequelize)

// Author of the book
Author.hasMany(Book)
Book.belongsTo(Author)

// connector table to books and genres
const bookGenre = sequelize.define('bookGenre', {})
Book.belongsToMany(Genre, { through: bookGenre })

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created!`)
})

export default {
  Author,
  Genre,
  Book
}
