const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('App Service one sais hi ❤️')
})

app.get('/health', (req, res) => {
   res.send('OK')
})

app.listen(port, () => {
    console.log('AppService one runnin on port 3000')
})
