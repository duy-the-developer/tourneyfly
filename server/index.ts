import { Request, Response } from 'express'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

app.get('/ping', async (req: Request, res: Response) => {
  res.send(200)
})

app.listen(port, () => {
  console.log(`[ INFO ]: server is listening on port: ${port}`)
})

export default app
