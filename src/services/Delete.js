import API, { execute } from './Api'

export default {
  deleteReq: (id) => execute(API().get(`requests/${id}`))
}
