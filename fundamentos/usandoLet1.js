var numero = 1

{
    let numero = 2
    console.log('dentro =', numero) 
}
// no caso procura se há variável no bloco caso não busca no global.
console.log('fora =', numero)