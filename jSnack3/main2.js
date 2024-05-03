'use strict'

let somma=x;

for (let i = 1; i <= 10; i++) {
    somma+=Number(prompt (`inserire numero ${i}`));
}

console.log(somma);