const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('GET: Hello World!'))
app.post('/', (req, res) => res.send('POST: Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))