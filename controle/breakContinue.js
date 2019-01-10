const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) break
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

/*
As duas palavras reservadas causam desvio de fluxo,
no caso do break parando instantaneamente o bloco,
e salta para fora do laço corrente, que ele suporta.
O continue simplesmente pula a execução corrente e vai
para a proxima execucao.
*/

//externo: rotulo para chamar o break para o primeiro laço.
externo: for (a in nums) {
    for (a in nums) {
        for (b in nums) {
            if(a == 2 && b == 3) break externo // usando o rotulo para chamar o break para o laço mais externo.
            console.log(`Par = ${a}, ${b}`)
        }
    }
}

// não é uma boa prática este tipo de código(desviando fluxo), é bom usar alternativas mais elegantes.