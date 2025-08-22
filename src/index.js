const fs = require('fs')

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]
let teste

fs.readFile(link, 'utf-8', (erro, texto) => {
    verificarPalavrasDuplicadas(texto)
})

//criar um array com as palavras
//contar as ocorrências
//montar um objeto com o resultado

// {
//     "web": 5,
//     "computador": 4
// }

function verificarPalavrasDuplicadas(texto) {
     const listaPalavras = texto.split(' ')
     const resultado = {}
     listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
     })
     console.log(resultado)
}



