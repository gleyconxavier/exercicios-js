const _ = require('lodash')
setInterval(() => console.log(_.random(1, 120)), 2000)

/*
   foi importado lodash e chamado a função 'random usando a constante que representa o mesmo
   atribuido valor de 1 a 1000 para random, que é recebido por setInterval resultando em um print
   de valores randomicos entre 1 a 1000 no intervalo de 2000ms, provavel 2s.
*/

/*
   nesta aula também foi ensinado como usar nodemon, que nada mais é uma execução em tempo real
   do código a partir do momento em que foi chamado, ele faz busca toda vez que um novo código é salvo.
*/