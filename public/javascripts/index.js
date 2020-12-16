function getTime(req) {


  const reqTime = req.requestTime
  const resTime = new Date()
  const totalTime = Number(resTime.getTime()) - Number(reqTime.getTime())

  //show req time
  console.log(`Request  time : ${reqTime.toLocaleDateString()} ${reqTime.toLocaleTimeString()} (${reqTime.getTime()} ms) | ${req.method} from ${req.url}`)

  //show res time 
  console.log(`Response time : ${resTime.toLocaleDateString()} ${resTime.toLocaleTimeString()} (${resTime.getTime()} ms) | ${req.method} from ${req.url}`)

  //show total time
  console.log(` Total time: ${totalTime} ms`)
}

module.exports = getTime