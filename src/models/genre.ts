import { Sequelize, STRING, UUID, Model } from 'sequelize'

export default (sequelize: any) => {
  return sequelize.define('genre', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    name: STRING
  })
}
