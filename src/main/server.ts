import app from './config/app'

app.listen(process.env.PORT || 3001, () => {
  console.log('listening at %s', process.env.PORT || 3001)
})
