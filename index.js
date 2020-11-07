require('dotenv').config()

let express = require('express')
let cors = require('cors')

let db = require('./src/models/index.js')
let models = db.models
let sequelize = db.sequelize

const app = express()

let routes = require('./src/routes/index.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const ERASE_DATABASE_ON_SYNC = true

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('bob'),
  }
  next()
})

app.use('/users', routes.user)
app.use('/messages', routes.message)

sequelize.sync({ force: ERASE_DATABASE_ON_SYNC }).then(() => {
  if (ERASE_DATABASE_ON_SYNC) {
    createUsersWithMessages()
  }

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
})

const createUsersWithMessages = async () => {
  // make user with 1 message
  await models.User.create(
    {
      username: 'alice',
      messages: [
        {
          text: 'Published the Road to learn React',
        },
      ],
    },
    {
      include: [models.Message],
    },
  )

  // make user with 2 messages
  await models.User.create(
    {
      username: 'bob',
      messages: [
        {
          text: 'Happy to release ...',
        },
        {
          text: 'Published a complete ...',
        },
      ],
    },
    {
      include: [models.Message],
    },
  )
}