const customExpress = require('./config/customExpress')
const conn = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')

const app = customExpress()
const port = 3000

conn.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        
        tabelas.init(conn)

        app.listen(port, (req, res) => {
            console.log(`servidor rodando na porta ${port} e conexão com mysql ok`)
        })
    }
})
