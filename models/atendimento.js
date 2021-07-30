const conn = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {
    add (atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss')
        const newAtendimento = { ...atendimento, dataCriacao, data }

        const isValidDate = moment(data).isSameOrAfter(dataCriacao)
        const isValidClient = atendimento.cliente.length >= 5
        let errors = []

        if (!isValidDate) {
            errors.push({
                campo: 'data',
                valid: isValidDate,
                message: 'Data inválida! A data não pode ser menor que a data de hoje.'
            })
        }

        if (!isValidClient) {
            errors.push({
                campo: 'client',
                valid: isValidClient,
                message: 'O campo nome deve possuir mais que 5 caracteres.'
            })
        }

        if (errors.length > 0) {
            res.status(400).json(errors)
        } else {
            const sql = 'INSERT INTO atendimentos SET ?'
    
            conn.query(sql, newAtendimento, (error, response) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    const id = response.insertId
                    res.status(201).json({...newAtendimento, id})
                }
            })
        }
    }

    list (res) {
        const sql = 'SELECT * FROM atendimentos'

        conn.query(sql, (error, response) => {
            if (error) {
                res.status(500).json()
            } else {
                res.status(200).json(response)
            }
        })
    }

    listById (res, id) {
        const sql = `SELECT * FROM atendimentos WHERE id = ${id}`

        conn.query(sql, (error, response) => {
            if (error) {
                res.status(500).json(error)
            } else {
                res.status(200).json(response[0])
            }
        })
    }

    update (res, id, atendimento) {
        if (atendimento.data) {
            atendimento.data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss')
        }

        const sql = 'UPDATE atendimentos SET ? WHERE id = ?'

        conn.query(sql, [atendimento, id], (error, response) => {
            if (error) {
                res.status(500).json(error)
            } else {
                res.status(200).json({...atendimento, id})
            }
        })
    }

    delete (res, id) {
        const sql = `DELETE FROM atendimentos WHERE id = ${id}`

        conn.query(sql, (error, response) => {
            if (error) {
                res.status(500).json(error)
            } else {
                res.status(200).json(response)
            }
        })
    }
}

module.exports = new Atendimento
