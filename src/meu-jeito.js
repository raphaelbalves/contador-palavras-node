const fs = require('fs')

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

fs.readFile(link, 'utf-8', (erro, texto) => {
    dividirParagrafos(texto)
})

//criar um array com as palavras
//contar as ocorrências
//montar um objeto com o resultado

// {
//     "web": 5,
//     "computador": 4
// }

function dividirParagrafos(texto) {
    const paragrafos =  texto.toLowerCase().split('\r\n\r\n')
    const contagem = verificaPalavrasDuplicadas(paragrafos)
    console.log(contagem)
}

function verificaPalavrasDuplicadas(paragrafos) {
    const resultado = {}
    paragrafos.forEach((paragrafo, indice) => {
        const listaPalavras = paragrafo.split(' ')
        resultado[`paragrafo${indice+1}`] = {}
        listaPalavras.forEach(palavra => {
            resultado[`paragrafo${indice+1}`][palavra] = (resultado[`paragrafo${indice+1}`][palavra] || 0) + 1
     })
    })
    return resultado
    //  const listaPalavras = texto.split(' ')
    //  const resultado = {}
    //  listaPalavras.forEach(palavra => {
    //     resultado[palavra] = (resultado[palavra] || 0) + 1
    //  })
    //  console.log(resultado)
}



