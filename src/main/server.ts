import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from '../main/config/env'

MongoHelper.connect(env.mongoUrl).then(async () => {
  const app = (await import('./config/app')).default
  app.listen(process.env.PORT || 3001, () => {
    console.log('listening at %s', process.env.PORT || 3001)
  })
}).catch(e => console.log(e))
