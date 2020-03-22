import API, { execute } from './Api'

export default {
  workerResponse: () => execute(API().get('responses')),
  getExcel: () => execute(API().get('/excel')),
  get: id => execute(API().get(`authors/${id}`)),
  create: author => execute(API().post('authors', { author })),
  delete: id => execute(API().delete(`authors/${id}`)),
  update: (id, name) => execute(API().post(`authors/${id}`, { author: name }))
}
