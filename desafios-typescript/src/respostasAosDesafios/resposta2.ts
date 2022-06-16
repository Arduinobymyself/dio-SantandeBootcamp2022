/////////////////////////////////////////////////////
// Autor: Marcelo Pinto de Moraes
// Curso: Introdução Prática ao Typescript
// Professor: João Santos
// Entidade: Digital Innovation One Inc
// Bootcamp: Santander Fullstack Developers 2022
// Data: 14/06/22
/////////////////////////////////////////////////////

// Desafio: Melhorando o código usando TypeScript

// resposta: Criando uma interface pessoa para poder tipar os objetos

interface pessoa {
    nome: string;
    idade: number;
    profissao: string;
}

// esse bloco vamos definir o objeto como do tipo pessoa
let pessoa1 = {} as pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {} as pessoa
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

// nesse bloco vamos tipar a pessoa
let pessoa3: pessoa = {
    nome: "laura",
    idade: 32, // aqui vamos mudar a idade para ser um number ao invés de um string
    profissao: "Atriz"
};

let pessoa4: pessoa  = { // removemos o = e substituimos por :
    nome: "carlos", 
    idade: 19,
    profissao: "padeiro"
}