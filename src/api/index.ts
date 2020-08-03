import { request } from 'lib/http'

import * as srv2 from './srv2'

export type Content = any

const srv1 = {
  module1: {
    v1: {
      content: {
        list: async (): Promise<Content> => {
          return await request('/module/v1/content/list', {
            method: 'get',
            params: {}
          })
        }
      }
    }
  }
}

export { srv1, srv2 }
