const Atendimento = require('../models/atendimento')

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('servidor rodando')
    })
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.add(atendimento, res)
    })
    
    app.get('/atendimentos/:id', (req, res) => {
        Atendimento.listById(res, parseInt(req.params.id))
    })

    app.get('/atendimentos', (req, res) => {
        Atendimento.list(res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        Atendimento.update(res, parseInt(req.params.id), req.body)
    })
    
    app.delete('/atendimentos/:id', (req, res) => {
        Atendimento.delete(res, parseInt(req.params.id))
    })
}
