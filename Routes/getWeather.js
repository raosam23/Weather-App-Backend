const express = require('express')
const router = express.Router()
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config({
    path : './.env'
})

router.post('/getweather',async (req,res)=>{
    // res.send('In getweather endpoint')
    const apikey = process.env.API_KEY
    const { location } = req.body
    if(!location) {
        console.log('Nothing is in location')
    }
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params : {
                appid : apikey,
                q : location,
                units : "metric"
            }
        })
        res.json(response.data)
    }
    catch(err) {
        res.status(500).json(err)
    }

})

module.exports = router
