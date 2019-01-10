let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)

/* resultado da verdadeiro,
o ++ foi executado antes da comparação
e o -- foi executado depois de comparar
 "++numero != numero++ " */

 console.log(num1 === num2)