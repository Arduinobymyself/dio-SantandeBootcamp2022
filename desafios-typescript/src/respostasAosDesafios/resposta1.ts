/////////////////////////////////////////////////////
// Autor: Marcelo Pinto de Moraes
// Curso: Introdução Prática ao Typescript
// Professor: João Santos
// Entidade: Digital Innovation One Inc
// Bootcamp: Santander Fullstack Developers 2022
// Data: 14/06/22
/////////////////////////////////////////////////////

// Desafio: Rodando código sem causar erroserros? 

// reposta 1
// podemos inferir o objeto
const employee = {
    code: 10,
    name: "Flora",
};

// resposta 2
// podemos tipar o objeto employee
const employee2: {code: number, name: string} = {
    code: 100,
    name: "Marcelo"
}

// resposta 3
// podemos criar uma interface para employee genérica
interface employee {
    code: number,
    name: string
}
// agora podemos criar quantos employees quisermos, usando a interface
const employee3: employee = {// aqui estamos tipando o objeto
    code: 101,
    name: 'Sara'
}
const employee4 = {} as employee; // aqui estamos informado o objeto com o tipo definido na interface
// e adicionado os devidos valores aos campos necessários
employee4.code = 120;
employee4.name = "Gabriel";

