// app.js
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const getTime = require('././public/javascripts/index')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const requestTime = function (req, res, next) {
  req.requestTime = new Date()
  next()
}

app.use(requestTime)


app.get('/', (req, res) => {
  getTime(req)//呼叫時間抓取函式
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  getTime(req)
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  getTime(req)
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  getTime(req)
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})