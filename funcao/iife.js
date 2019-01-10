// IIFE - Immediately Invoked Function Expression - função que se autoinicia imediatamente.

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!') // ela funciona em contexto local não global
})()