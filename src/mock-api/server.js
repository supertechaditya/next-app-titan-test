import { Server, Model } from 'miragejs'
import { userFactory } from './factories/user-factory'
import { userRoutes } from './routes/user-route'

export function makeServer ({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model
    },
    factories: {
      user: userFactory
    },
    seeds (server) {
      server.createList('user', 10)
    },

    routes () {
      this.namespace = 'api'
      this.timing = 750
      userRoutes(this)
    }
  })

  return server
}
