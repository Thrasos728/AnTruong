const express = require('express')
const app = express()
const port = 3000

let message=22 , name=6;
console.log(((message+name)*2)**3)

app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
})