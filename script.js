let linhas = ''
let array = []
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    let nomes = document.getElementById('nome')
    let numeros = document.getElementById('numero')
    let quantidadeNumeros = document.getElementById('quantidade-contatos')
    let teste = array.push(length.numeros)
    let linha = '<tr>'
    linha += `<td>${nomes.value}</td>`
    linha += `<td>${numeros.value}</td>`
    linha += '</tr>'
    linhas += linha
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
    quantidadeNumeros.innerHTML = teste
    nomes.value = ''
    numeros.value = ''
})