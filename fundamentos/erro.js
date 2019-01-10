function tratarErroLancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Um erro foi encontrado, comunique o administrador.'
    throw {
        nome: erro.name,
        msg: erro.mesage,
        date: new Date
    }
}
function imprimirNomeGritando(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        //console.log('Desculpe, foi encontrado um erro comunique o Administrador: ' + e)
        tratarErroLancar(e)
    } finally {
        console.log('Final')
    }
}

/* o finally sempre é chamado, tendo erro ou não,
catch serve para tratar o erro, interessante gerar um hash
no erro, para a pesquisa no log do sistema. */


const obj = {nome: 'Gleycon'}
imprimirNomeGritando(obj)