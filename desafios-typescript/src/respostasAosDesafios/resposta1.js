"use strict";
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
const employee2 = {
    code: 100,
    name: "Marcelo"
};
// agora podemos criar quantos employees quisermos, usando a interface
const employee3 = {
    code: 101,
    name: 'Sara'
};
const employee4 = {}; // aqui estamos informado o objeto com o tipo definido na interface
// e adicionado os devidos valores aos campos necessários
employee4.code = 120;
employee4.name = "Gabriel";
