// Aqui neste mini projeto em axios utilizei os comandos:

// npm i --save axios 

// pra instalar a bilbioteca axios que faz requisiçõs http


// criei dua funçoes para filtrar os russos e outra para filtrar somente os homens

// Apliquei as no methodo filter  e reduce para saber quem possui o menor salario do javaScript

// usei a url da cod3r para peagar os dados do servidor da cod3r



const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const Russos = func => func.pais === 'Russia'
const homens = func => func.genero === 'M'
const maiorSalario = (funcionario, funcAtual) => {
    return funcionario.salario > funcAtual.salario ? funcionario : funcAtual
}

axios.get(url).then(response => {
    const func = response.data


    // Aqui so vai mostrar os funcionarios russos do genero masculino
    const funcRussos = func.filter(Russos).filter(homens)

    // Aqui so vai mostrar o que tem o maior salarios
    const funcionarioRussosMaiorSalario = func.filter(Russos).filter(homens).reduce(maiorSalario)

    console.log(funcRussos)
    console.log("========")

    console.log("O funcionarios com maior salario é \n", funcionarioRussosMaiorSalario, "\n", "O nome do funcionario  com o maior salario ==>", funcionarioRussosMaiorSalario.nome, "\n",
        "E seu salario é de ==>", "US$", funcionarioRussosMaiorSalario.salario)


})