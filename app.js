// app.js
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const requestTime = function (req, res, next) {
  req.requestTime = new Date()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  const reqTime = req.requestTime
  const resTime = new Date()
  const totalTime = Number(resTime.getTime()) - Number(reqTime.getTime())

  //show req time
  console.log(`Request  time : ${reqTime.toLocaleDateString()} ${reqTime.toLocaleTimeString()} (${reqTime.getTime()} ms) | ${req.method} from ${req.url}`)

  //show res time 
  console.log(`Response time : ${resTime.toLocaleDateString()} ${resTime.toLocaleTimeString()} (${resTime.getTime()} ms) | ${req.method} from ${req.url}`)

  //show total time
  console.log(` Total time: ${totalTime} ms`)

  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})