import devUrl from './dev'
import proUrl from './pro'

const url = __DEV__ ? devUrl : proUrl

export default {
  apiUrl : url.apiUrl,
  apiPrefix : "api",
  gitHub : ''
}

