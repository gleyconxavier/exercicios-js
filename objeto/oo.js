// código não executável

/*
 Anteriormente se usava funções para manipular dados,
 já com orientação a objetos, você tem dados e dentro destes
 dados funções.
*/

// procedural
processamento(valor1, valor2, valor3)

// Orientada a Objetos (OO)
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}

objeto.processamento() // o foco passou a ser o objeto

// Principios importantes:
// 1 - Abstração
// 2 - Encapsulamento
// 3 - Herança ( prototype )
// 4 - Polimorfismo

// Abstração é pegar um objeto do mundo real e abstrair seus atributos/dados, que irão ser usados no sistema(simplificação).
// Encapsulamento - detalhes de implementação escondidos e mostrar para quem precisa usar aquele sistema uma interface simples para que possa interagir com determinado objeto.
// Herança - o conceito de herança em JS é através de prototype, uma relação "é um" por exemplo biscoito é um cachorro, cachorro é um animal.
// Polimorfismo - multiplas formas, exemplo carro é um objeto genérico que pode apontar para ferrari, audia, celta, corsa e etc.
