const express = require('express')
const app = express()

app.use((req, res) => {
    res.send('Tudo <b>bem?</b>')
})

app.listen(3000, () => {
    console.log('Backend Started.');
})