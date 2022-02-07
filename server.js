const express = require('express')
const app = express()
const path = require('path')

app.use('/public', express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    var duongdanFile = path.join(__dirname,'home.html')
    res.sendFile(duongdanFile)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})