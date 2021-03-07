const express = require('express')
const app = express()
const port = 3000
const request = require("request")

function URL(param) {
    return `https://instagram.com/${param}/?__a=1`
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts', (req, res) => {
    console.log(req.params)
    console.log(req.params.nano)
    request({
        url: URL(req.query.nano),
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            //console.log(body) // Print the json response
            res.send(body)
        }
    })    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})