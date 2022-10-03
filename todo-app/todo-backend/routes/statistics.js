const express = require("express")
const { setAsync, getAsync } = require("../redis")
const router = express.Router()

/* GET statistics listing. */
router.get("/", async (_, res) => {
  // const todos = await Todo.find({})
  // res.send(todos)

  res.send({ added_todos: await getAsync("counter") })
})

router.get("/reset", async (_, res) => {
  await setAsync("counter", 0)

  res.send(await getAsync("counter"))
})

module.exports = router
