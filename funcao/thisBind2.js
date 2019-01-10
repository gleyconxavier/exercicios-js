function Pessoa() {
    this.idade = 0

    const self = this // passando o this para uma constante, fixa assim como bind porém não é uma boa prática.
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // dipara uma outra funcao dado um determinado tempo
}

new Pessoa

