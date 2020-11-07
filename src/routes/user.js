
const router = require('express').Router()

router.get('/', async (req, res) => {
  const users = await req.context.models.User.findAll({
    include: [req.context.models.Message]
  })
  return res.send(users)
})

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId,
  )
  return res.send(user)
})

module.exports = router
