import fs from 'fs'
//const fs = require('fs')
import trataErros from './erros/funcoesErro.js'
//const trataErros = require('./erros/funcoesErro')
import { contaPalavras } from './index.js'
import { montaSaidaArquivo } from './helpers.js'

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]
const endereco = caminhoArquivo[3]

fs.readFile(link, 'utf-8', (erro, texto) => {
    try{
        if(erro) throw erro
        const resultado = contaPalavras(texto)
        criaESalvaArquivos(resultado, endereco)
    } catch(erro) {
       trataErros(erro)
    }
})

// async function criaESalvaArquivos(listaPalavras, endereco) {
//     const arquivoNovo = `${endereco}/resultado.txt`
//     const textoPalavras = JSON.stringify(listaPalavras)
//     try {
//         await fs.promises.writeFile(arquivoNovo, textoPalavras)
//         console.log('arquivo criado')

//     } catch(erro) {
//         throw erro

//     }
// }

function criaESalvaArquivos(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`
    const textoPalavras = montaSaidaArquivo(listaPalavras)
    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() =>{
            console.log('arquivo criado')
        })
        .catch((erro) => {
            throw erro            
        })
        .finally(() => {
            console.log('operacao finalizada')
        })
}

