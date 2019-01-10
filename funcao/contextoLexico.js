// contexto lexico
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
// funcao quando declarada carrega consigo contexto lexico

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()