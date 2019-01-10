var funcs = []

for(var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs[9]()

// todos os elementos do array passaram a ser 10 devido ao uso de var e o mesmo nao ter escopo