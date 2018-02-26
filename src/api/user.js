import {buildApiRequest as A,getApiUrl as G} from './init'

export default {
    login: (p,c) => A(p,'user/login','post',c),
}


