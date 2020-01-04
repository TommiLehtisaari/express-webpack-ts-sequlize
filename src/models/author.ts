import { Sequelize, UUID, STRING, INTEGER } from 'sequelize'

export default (sequelize: any) => {
  return sequelize.define('author', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    name: STRING,
    born: INTEGER
  })
}
