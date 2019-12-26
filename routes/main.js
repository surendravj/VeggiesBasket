const express = require('express')
const request = require('request')
const router = express.Router()
const url = 'https://veggiesbasket.com/shaw/shaw/api/emp/product.php'





//router for home-page
router.get('/', (req, res) => {
    request.post(url, (error, response, body) => {
        if (error) {
            console.log(error)
        }
        var data = JSON.parse(body);
        var offers = calculateOffers(data)
        var renderData = {
            veges: data,
            discount: offers
        }
        res.render('index', renderData)
    })
})

// function that return offers 
calculateOffers = (arr) => {
    let offers = []
    for (let i = 0; i < arr.length; i++) {
        let x = Math.floor(((arr[i].reg1 - arr[i].pri1) / arr[i].reg1) * 100)
        offer = 100 - x;
        offers.push(100 - offer)
    }
    return offers
}

module.exports = router