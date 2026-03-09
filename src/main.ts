import express, { response } from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config()
const app = express();
const port = process.env.PORT;

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

app.post('/contato', async (request, response) => {
    response.redirect('/');
    
const email = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    } 
});


await email.sendMail({
    from: request.body.email,
    to: "testemariany3@gmail.com",
    subject: "mensagem formulario",
    text: request.body.mensagem
})


});

app.listen(port, () => {
    console.log(`Web server running in http://localhost:${port}`)
})
