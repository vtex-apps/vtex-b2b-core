/* eslint-disable @typescript-eslint/no-explicit-any */
import { Service } from '@vtex/api'

declare global {
  interface State {
    code: number
  }
}

export default new Service({})
