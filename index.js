const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('App Service one sais hi ❤️')
})

app.get('/fasz', (req, res) => {
   res.send('L"O"CS')
})

app.listen(port, () => {
    console.log(`AppService one runnin on port ${port}`)
})
