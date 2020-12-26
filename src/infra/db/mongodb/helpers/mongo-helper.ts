import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  map (collection: any): any {
    const { _id, ...collectionWithOutId } = collection
    return Object.assign({}, collectionWithOutId, { id: _id })
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}
