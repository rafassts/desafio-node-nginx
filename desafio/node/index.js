const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db', //container
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config);
seed();
connection.end

app.get('/', (req, res) => {

    connection.query("select name from people", function (err, result, fields) {
        if (err) {
            console.log('Erro ao realizar a consulta')
        }
        let people = "";
        for (const row of result) {
            people += `<li>${row.name}</li>`
        }
        connection.end
        const html = `<h1>Full Cycle Rocks</h1>
        Pessoas:
        <ul>
        ${people}
        </ul>`
        res.send(html)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

function seed() {
    try {
        connection.query("create table people(id int not null auto_increment, name varchar(255), primary key(id));",
            function (err, result, fields) {
                if (err) {
                    console.log('tabela existente')
                } else {
                    connection.query("INSERT INTO people(name) VALUES ('Rafa')")
                    connection.query("INSERT INTO people(name) VALUES ('Suzi')")
                }
            });
    } catch (ex) {
        console.log(ex);
    }

}