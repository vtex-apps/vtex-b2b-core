/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ParamsContext,
  RecorderState,
  IOClients,
  IOContext,
  SegmentData,
} from '@vtex/api'
import { Service } from '@vtex/api'

declare global {
  interface CustomIOContext extends IOContext {
    currentProfile: CurrentProfile
    segment?: SegmentData
    orderFormId?: string
  }

  interface CurrentProfile {
    email: string
    userId: string
  }

  interface State {
    code: number
  }
}

export default new Service<IOClients, RecorderState, ParamsContext>({
  routes: {},
})
