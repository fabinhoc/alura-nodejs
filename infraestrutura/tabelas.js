class Tabelas {
    init (conn) {
        this.conn = conn
        this.criarTabelaAtendimentos()
    }

    criarTabelaAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (' +
                            'id int NOT NULL AUTO_INCREMENT, ' +
                            'cliente VARCHAR(80) NOT NULL, ' +
                            'pet VARCHAR(80) NOT NULL, ' +
                            'servico VARCHAR(20) NOT NULL, ' +
                            'status VARCHAR(20) NOT NULL, ' + 
                            'observacoes text, ' +
                            'data datetime NOT NULL, ' +
                            'dataCriacao datetime NOT NULL, ' +
                            'PRIMARY KEY(id))'

        this.conn.query(sql, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('tabela atendimento criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas