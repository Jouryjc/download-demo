import express from 'express'
import cors from 'cors'
import { router } from './router'

const app = express()
const port = 3000

app.use(cors())

app.use('/static', express.static('public'))

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})