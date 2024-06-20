/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ParamsContext,
  RecorderState,
} from '@vtex/api'
import { Service } from '@vtex/api'


declare global {
  interface State {
    code: number
  }
}

export default new Service<RecorderState, ParamsContext>({})
