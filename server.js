const express = require('express')
const app = express()

app.use(loggingMiddleware)


app.get('/', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})

app.get('/services', (req, res) => {
  res.sendFile(__dirname+'/service.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/contact.html')
})

function loggingMiddleware(req, res, next) {
  console.log('Inside Middleware')
  next()
}

app.listen(3000, () => console.log('Server Started'))