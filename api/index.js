import Titulacao from './Titulacao.js'
import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
// import cors from 'cors'
const app = express()
const port = process.env.API_PORT

app.use(express.json())
// app.use(cors())

app.get('/titulacoes', async (request, response) => {
    const titulacoes = await Titulacao.findAll()

    if(titulacoes){
        response.status(200).json(titulacoes)
    } else {
        response.status(404).json({error: 'Nenhuma titulação foi encontrada'})
    }
})

app.listen(port, () => {
    console.log(`APLICAÇÃO ESTÁ RODANDO NA PORTA ${port}`);
})