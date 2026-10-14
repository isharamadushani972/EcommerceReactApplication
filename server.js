import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const currentDirectory = path.dirname(fileURLToPath(import.meta.url))
const buildDirectory = path.join(currentDirectory, 'dist')
const port = process.env.PORT || 3000

app.use(express.static(buildDirectory))

app.use((request, response, next) => {
  if (request.method !== 'GET' || !request.accepts('html')) {
    return next()
  }

  response.sendFile(path.join(buildDirectory, 'index.html'), (error) => {
    if (error) next(error)
  })
})

app.use((request, response) => {
  response.status(404).send('Not found')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})