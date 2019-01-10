const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c }}

//convertendo para json
console.log(JSON.stringify(obj))

//convertendo de json para objeto

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": false, "d": {}, "e": [] }')) //posibilidades do JSON