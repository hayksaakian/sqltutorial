let Sequelize = require('sequelize')

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
)

const models = {
  User: require('./user')(sequelize, Sequelize.DataTypes),
  Message: require('./message')(sequelize, Sequelize.DataTypes),
}

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

module.exports = {
  sequelize,
  models
}