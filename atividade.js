const http = require('http');

let alunos = [
    { id: 1, nome: "Ana", idade: 17 },
    { id: 2, nome: "Carlos", idade: 18 }
];

const servidor = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');

    // ROTA 1 - LISTAR TODOS OS ALUNOS
    if (req.url === '/alunos' && req.method === 'GET') {

        res.writeHead(200);

        res.end(JSON.stringify(alunos));

    }

    // ROTA 2 - CONSULTAR UM ALUNO ESPECÍFICO
    else if (req.url === '/aluno/1' && req.method === 'GET') {

        const aluno = alunos.find(a => a.id === 1);

        if (aluno) {
            res.writeHead(200);
            res.end(JSON.stringify(aluno));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({
                mensagem: 'Aluno não encontrado'
            }));
        }

    }

    // ROTA 3 - INFORMAÇÕES DO SISTEMA
    else if (req.url === '/sobre' && req.method === 'GET') {

        res.writeHead(200);

        res.end(JSON.stringify({
            mensagem: 'Sistema de Gerenciamento de Alunos'
        }));

    }

    // ROTA 4 - QUANTIDADE DE ALUNOS
    else if (req.url === '/quantidade' && req.method === 'GET') {

        res.writeHead(200);

        res.end(JSON.stringify({
            quantidade: alunos.length
        }));

    }

    // ROTA 5 - ROTA NÃO ENCONTRADA
    else {

        res.writeHead(404);

        res.end(JSON.stringify({
            mensagem: 'Rota não encontrada'
        }));

    }

});

servidor.listen(4000, () => {
    console.log('Servidor funcionando na porta 4000');
});


