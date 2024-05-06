'use strict'

const numeriDispari = [];


for (let i = 1; i <= 6; i++) {
 
    const input = (prompt (`inserire un numero ${i}`));


    const inpuutnan = parseInt(input);

    if(!isNaN(parseInt(input))) {
      console.log('numero')
      if  (inpuutnan % 2 !== 0) {
      
        numeriDispari.push(inpuutnan);

      }
    
    }
    
}

console.log(numeriDispari);