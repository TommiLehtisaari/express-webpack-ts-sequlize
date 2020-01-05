import { Sequelize } from 'sequelize'
import * as config from 'config'
import AuthorModel from './models/author'
import GenreModel from './models/genre'
import BookModel from './models/book'

const sequelize = new Sequelize(
  config.get('postgres.database'),
  config.get('postgres.user'),
  config.get('postgres.password'),
  {
    host: config.get('postgres.host'),
    dialect: 'postgres',
    define: {
      // underscored: true,
      timestamps: false
    }
  }
)

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
Genre.belongsToMany(Book, { through: bookGenre })

sequelize.sync({ force: false, alter: false }).then(() => {
  console.log(`Database & tables created!`)
})

export default {
  Author,
  Genre,
  Book
}
