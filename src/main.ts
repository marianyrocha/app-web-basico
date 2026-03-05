import express, { response } from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (_, response) => {
    response.sendFile(path.join(__dirname, '../views/home.html'));
});

app.get('/sobre-mim', (_, response) => {
    response.sendFile(path.join(__dirname, '../views/sobre.html'))
})

app.get('/contato', (_, response) => {
    response.sendFile(path.join(__dirname, '../views/contato.html'));
});

app.get('/projetos', (_, response) => {
    response.sendFile(path.join (__dirname, '../views/projetos.html'));
});

app.post('/contato', (request, response) => {
    console.log(request.body);
    response.redirect('/');
});

app.listen(port, () => {
    console.log(`Web server running in http://localhost:${port}`)
})