const express = require('express');
const app = express();

// profiles/12345?
// campanha=googleads &
// nome_campanha=seila

app.use(express.urlencoded({extended: true})); // necessário para tratar o body das requisições

app.get('/', (req, res) => {
    res.send(`
        <form action = '/' method = 'POST'>
        Nome do cliente: <input type="text" name="qualquerCoisa"></input>
        <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req,res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.qualquerCoisa}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});