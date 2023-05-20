const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.use('/weather', require('./Routes/getWeather'))

app.listen(port, ()=>{
    console.log(`App listening at port ${port}`)
})