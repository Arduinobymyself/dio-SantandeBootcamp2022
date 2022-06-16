"use strict";
/////////////////////////////////////////////////////
// Autor: Marcelo Pinto de Moraes
// Curso: Introdução Prática ao Typescript
// Professor: João Santos
// Entidade: Digital Innovation One Inc
// Bootcamp: Santander Fullstack Developers 2022
// Data: 14/06/22
/////////////////////////////////////////////////////
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));
        }
        ;
    });
}
;
