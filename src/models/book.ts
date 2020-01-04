import { Sequelize, STRING, UUID, INTEGER } from 'sequelize'

export default (sequelize: any) => {
  return sequelize.define('book', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    title: STRING,
    published: INTEGER,
    pages: INTEGER
  })
}
