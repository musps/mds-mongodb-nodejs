const request = require('supertest')
const http = require('http')
const api = require('../api')

describe('/action-todo', () => {
  let server
  let db
  let uuid

  beforeAll((done) => {
    api.then(({ app, mongoose }) => {
      db = mongoose
      server = http.createServer(app)
      server.listen()
      done()
    })
  })

  afterAll((done) => {
    server.close()
    done()
  })

  describe('GET /action-todo/readAll', () => {
    it('responds with json', (done) => {
      request(server)
        .get('/action-todo/readAll')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('PUT /action-todo/create', () => {
    it('responds with json', (done) => {
      request(server)
        .put('/action-todo/create')
        .set('Accept', 'application/json')
        .send({
          description: 'Test default description.'
        })
        .end((error, resp) => {
            if (error) {
                throw error
            }
            uuid = resp.body.data._id
            done()
        })
    })
  })

  describe('POST /action-todo/updateByUUID/:uuid', () => {
    it('responds with json', (done) => {
      request(server)
        .post(`/action-todo/updateByUUID/${uuid}`)
        .set('Accept', 'application/json')
        .send({
          description: 'Test default description updated.',
          done: true
        })
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('GET /action-todo/readByUUID/:uuid', () => {
    it('responds with json', (done) => {
      request(server)
        .get(`/action-todo/readByUUID/${uuid}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('DELETE /action-todo/deleteByUUID/:uuid', () => {
    it('responds with json', (done) => {
      request(server)
        .delete(`/action-todo/deleteByUUID/${uuid}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('DELETE /action-todo/deleteAll', () => {
    it('responds with json', (done) => {
      request(server)
        .delete('/action-todo/deleteAll')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })
})
