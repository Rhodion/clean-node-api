import express from 'express'

const app = express()

app.listen(process.env.PORT || 3001, () => {
  console.log('listening at %s', process.env.PORT || 3001)
})
